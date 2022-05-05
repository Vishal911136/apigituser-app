import { useEffect,useState } from "react";
import Loading from "./Loading";
import { FcApproval } from "react-icons/fc";



const Card = () =>{

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async() =>{
        try{
            setLoading(false)
            const api = await fetch("https://api.github.com/users");
            setUsers(await api.json());
            console.log(users);
        }catch(error){
            setLoading(false)
            console.log("some error"+ error);
        }
    }   
    useEffect(() =>{
        getData();
    },[])

    if(loading){
       return <Loading />
    }

    return(
        <>
            <div className="card_container">
            {
                users.map((userdata) =>{
                return(
                    <div className="card" key={userdata.id}>
                        <div className="card_img">
                            <img src={userdata.avatar_url} alt="" />
                        </div>
                        <div className="card_content">
                            <h2>{userdata.login} <FcApproval/></h2>
                            <h4>Front end developer</h4>
                            <div className="card_review">
                                <div>
                                    <span>Article</span>
                                    <p className="article">38</p>
                                </div>
                                <div>
                                    <span>Followers</span>
                                    <p className="followers">998</p>
                                </div>
                                <div>
                                    <span>Ratings</span>
                                    <p className="ratings">8.9</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                })
            }

            </div>
        </>
    )
}
export default Card;