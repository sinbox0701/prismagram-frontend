//Client에 없는 state
//This app has only local state => Authorization
export const defaults = {
    isLoggedIn: Boolean(localStorage.getItem("token")) || false
};

export const resolvers = {
    Mutation:{
        logUserIn:(_,{token},{cache})=>{
            localStorage.setItem("token",token);
            cache.writeData({
                data:{
                    isLoggedIn: true
                }
            });
            return null;
        },
        logUserOut:(_,__,{cache})=>{
            localStorage.removeItem("token");
            window.location.reload();
            return null;
        }
    }
};