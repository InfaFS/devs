//import ibai from './Ibai_llanos_in_2020.jpg'
import { useState } from "react";
function TwitterFollowCard({userName ='unknown',fullName,initialIsFollowing}) {
    //console.log({userName});
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-Following' : 'tw-followCard-button'

    return(
        <article className="tw-followCard">
        <header className="tw-followCard-header">

            <img className="tw-followCard-avatar"
            alt={`El avatar de {fullName}`} src={`https://unavatar.io/${userName}`}/> 

        <div className="tw-followCard-info">
            <strong>{fullName}</strong>
            <span className="tw-followCard-infoUsername">@{userName}</span>
        </div>
        </header>

        <aside>
            <button className={buttonClassName}  onClick={() => (setIsFollowing(!isFollowing))}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-unfollow">Dejar de seguir</span>
            </button>

        </aside>

      </article>






    )

}

export default TwitterFollowCard;