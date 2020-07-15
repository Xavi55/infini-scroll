import React, { useState, useEffect } from "react"
export default function InfiniScroll()
//https://dev.to/syakirurahman/react-infinite-scroll-tutorial-with-and-without-a-library-1abg?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email
{
    //storage
    const [data, setData] = useState([
        {
            "email":"1@gmail.com",
            "first_name":"Kevin",
            "last_name":"Gamez"
        },{
            "email":"2@gmail.com",
            "first_name":"Mor",
            "last_name":"Jova"
        },{
            "email":"3@gmail.com",
            "first_name":"Joe",
            "last_name":"Lopex"
        },{
            "email":"4@gmail.com",
            "first_name":"Wibur",
            "last_name":"Smith"
        },{
            "email":"5@gmail.com",
            "first_name":"James",
            "last_name":"Doe"
        },{
            "email":"6@gmail.com",
            "first_name":"Jane",
            "last_name":"Doe"
        },{
            "email":"7@gmail.com",
            "first_name":"Martin",
            "last_name":"Ashew"
        },{
            "email":"8@gmail.com",
            "first_name":"Arron",
            "last_name":"Buoy"
        },{
            "email":"9@gmail.com",
            "first_name":"Giovanni",
            "last_name":"Martellini"
        },
    ])

    const [userList, setUserList] = useState([]);
    const [page, setPage] = useState(1);//load two users per page
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);
    const [iCount, setiCount] = useState(0)

    window.onscroll=()=>
    {
        //console.log(window.innerHeight,document.body.offsetHeight,window.scrollY)

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            if(!noData)
            {
                load(page)
            }
          }
    }

    useEffect(()=>
    {
        load(page)
    },[])

    const load=(page)=>
    {
        setLoading(1)
        //pull from storeage, simulate API call
        setTimeout(() => {
            if(page>=data.length/2)
            {
                setNoData(1)
            }
            else
            {
                let newList = userList.concat(data[iCount],data[iCount+1])
                setiCount(iCount+2)
                setUserList(newList)
                setPage(page+1)
            }
            setLoading(0)
        }, 1500);
    }

    return(
        <div>
            {
                userList.map((user,i)=>
                (
                    <div key={i}>
                        <div className="box" >
                            <div>
                                <strong>Email</strong>: {user.email}<br/> 
                                <strong>First Name</strong>: {user.first_name}<br/> 
                                <strong>Last Name</strong>: {user.last_name}<br/>
                            </div>
                        </div>
                        {loading ? <div className="mess">Loading...</div> :""}
                    </div>
                ))    
            }
            {noData ? <div className="mess">No more data.</div>:""}
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}