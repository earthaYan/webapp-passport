const typeEnum = {
    dev:2,
    uat:2,
    prd:3
}
let env_type = typeEnum[process.env.VUE_APP_TYPE]||'prd'
module.exports={
    env_type
}