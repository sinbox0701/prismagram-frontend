//Client에 없는 state
//This app has only local state => Authorization
//Query에 @client 되어있는 것은 여기 resolver가 해결
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
            window.location = "/";
            return null;
        }
    }
};