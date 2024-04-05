import TwitterFollowCard from './TwitterFollowCard'
import './index.css'
import './App.css'
import { useState } from 'react'

function App (){
    //const format = (userName) => `@${userName}`
    const users = [
        {
            
        userName:"facusilv1", 
        fullName:"Facundo Silva" ,
        initialIsFollowing: true
        },
        {
        userName:"WillyRexYT", 
        fullName:"Fernan" ,
        initialIsFollowing:false
        }
    ]

    return(
        <section className='App'>
            {
                users.map(user => {
                    const {userName,fullName,initialIsFollowing} = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            fullName={fullName}
                            initialIsFollowing={initialIsFollowing}
                        />
                    )
                }
                )
            }
    
        </section>

    )
}

export default App;
