// Scry Info.  All rights reserved.
// license that can be found in the license file.

import NotFound        from "./views/404.vue";
import Login           from "./views/login.vue";
import Home            from "./views/home.vue";
import DataList        from "./views/options/binary_datalist.vue";
import TransactionBuy  from "./views/options/transaction_buy.vue";
import TransactionSell from "./views/options/transaction_sell.vue";
import Publish         from "./views/options/binary_publish.vue";
import Verify          from "./views/options/transaction_verify.vue";
import Arbitrate       from "./views/options/transaction_arbitrate.vue";
import Balance         from "./views/options/function_balance.vue";
import NickName        from "./views/options/function_nickname.vue";
import Message         from "./views/options/function_message.vue";
import administrator   from "./views/options/ES_admistrator.vue"; // extra scene

let routes = [
    {
        path: "/",
        component: Login,
        name: "login",
        hidden: true
    },
    {
        path: "/home",
        component: Home,
        name: "home",
        children: [
            {path: "/dl",  component: DataList,        name: "数据列表"},
            {path: "/tb",  component: TransactionBuy,  name: "我购买的数据"},
            {path: "/ts",  component: TransactionSell, name: "我出售的数据"},
            {path: "/pd",  component: Publish,         name: "发布新数据"},
            {path: "/vf",  component: Verify,          name: "我验证的数据"},
            {path: "/at",  component: Arbitrate,       name: "我仲裁的数据"},
            {path: "/blc", component: Balance,         name: "Balance",       hidden: true},
            {path: "/ncn", component: NickName,        name: "NickName",      hidden: true},
            {path: "/msg", component: Message,         name: "Short Message", hidden: true},
            {path: "/administrator",  component: administrator, name: "Administrator Functions", hidden: true}  // extra scene
        ]
    },
    {
        path: "/404",
        component: NotFound,
        name: "not found",
        hidden: true
    },
    {
        path: "*",
        redirect: { path: "/404" },
        hidden: true
    }
];

export default routes;
