# acme_proj

following commands were used to craete the workspace and preojects:

npx create-nx-workspace acme --preset=empty
cd acme
 npm install --save-dev @nrwl/angular
npx  nx g @nrwl/angular:host host --remotes=gallery
 npx nx serve host
 
 gallery is subprojct/remote project which runs on port http://localhost:4201/
 where as main host runs on http://localhost:4200/
 
 
