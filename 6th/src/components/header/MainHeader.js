import './MainHeader.scss';
import MenuIcon from '../../assets/icons/yilllogo.PNG';
import Button from '../button/Button';

function MainHeader({ history }) {
    return (
        <header className="main-header"> 
            {/* require로 하면 안되는 경우 & 이미지 여러개 import */}
            {/* <img src={ require('../../assets/icons/yilllogo.PNG') } /> */}
            <img className="main-header-icon" src={MenuIcon} alt="menu icon"/>
            <nav className="main-header__nav">
                <Button text="[ON SOPT] Web Part" onClickFunc={() => history.push('/')}></Button>
                <span> / </span>
                <Button text="파트원 소개" onClickFunc={() => history.push('/members')}></Button>
            </nav>
            <div className="empty"></div>
            <div className="main-header__nav">
                <Button text="Share"></Button>
                <Button text="Updates"></Button>
                <Button text="Favorites"></Button>
                <Button text="…"></Button>
            </div>
        </header>
    );
}


export default MainHeader;