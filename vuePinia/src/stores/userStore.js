import { defineStore } from "pinia";
import  users  from "../../data/users.json"
export const userStore = defineStore('userStore',{
    state:() => {
        return { users }
    },
    getters:() => {

    },
    actions:()=> {

    }
})