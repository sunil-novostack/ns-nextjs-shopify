require('isomorphic-fetch');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const dotenv = require('dotenv');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

/*
const KoaRouter = require('koa-router');
const axios = require('axios');
*/
dotenv.config();
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');

const port = parseInt(process.env.PORT, 10) || 3000;
//const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

/*
const router = new KoaRouter();
router.get("/search/products",async(ctx)=>{
  try{
    ctx.body = {
      status:"success",
      data:"Hello This is from public API"
    }
  }catch(error){
    console.log(error)
  }
})
*/

app.prepare().then(() => {
  const server = new Koa();
  server.use(session({ sameSite: 'none', secure: true }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];
  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['read_products','write_products','read_script_tags','write_script_tags'],
      embedded:false,
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        //console.log('We did it!', accessToken);
        ctx.cookies.set('shopOrigin', shop, { httpOnly:false, secure: true, sameSite:'none' });
        //ctx.cookies.set('shopAccessToken', accessToken, { httpOnly:false, secure: true, sameSite:'none' });
        ctx.redirect('/');
      },
    }),
  );
  server.use(graphQLProxy({ version: ApiVersion.Unstable}));
  server.use(verifyRequest());
/*
  //Route Middleware
  server.use(router.allowMethods());
  server.use(router.routes());
*/

  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });
  server.listen(port, () => {
    //console.log(`> Ready on http://localhost:${port}`);
  });
  
});