import './Team.css';
import linked from '../../assets/Main/linkedin.png';
import git from '../../assets/Main/github.png';
import mail from '../../assets/Main/mail.png';

function Team(props) {
    return (
        <div className='con'>
            <img className='pfp' src={props.pfp} alt="Team-members"/>
            <p className='name'>{props.name}</p>
            <div className='links'>
                <a className='linked' href={props.linked}>
                    <img className='linkedin' src={linked} alt="linkedin"/>
                </a>
                <a href='#'>
                    <img className='mail' src={mail} alt="linkedin"/>
                </a>
                <a href='#'>
                    <img className='git' src={git} alt="linkedin"/>
                </a>
            </div>
        </div>
    );
}


export default Team;