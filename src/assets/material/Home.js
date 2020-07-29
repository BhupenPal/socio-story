import HeroBackground from '../img/background.png'

export default theme => ({

    // Common
    LightBG: {
        backgroundColor: '#D4F3EF',
        padding: '15vh 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    DarkBG: {
        backgroundColor: '#ABF0E9',
        padding: '15vh 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    WhiteBG: {
        backgroundColor: '#FFFFFF',
        padding: '15vh 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    TextMargin: {
        margin: '70px 0 50px 0'
    },

    //Header
    HeaderFlex: {
        padding: '0 10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 90
    },
    HeaderMenu: {
        display: 'flex',
        alignItems: 'center'
    },
    Logo: {
        color: 'white'
    },

    // Hero Box
    HeroBox: {
        padding: '6vh 0 15vh 0',
        background: `url(${HeroBackground}) no-repeat`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    HeroHeading: {
        color: '#F2C94C',
        fontWeight: 400
    },
    HeroText: {
        fontSize: '40px !important',
        marginBottom: 100
    },
    Ribbon: {
        height: '8vw',
        width: `${8 * 10.1}vw`
    },
    // Purpose Box

    purpose: {
        borderRadius: '20px',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },

    nomination: {
        borderRadius: '20px',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        padding: '40px 5px 40px 5px',
        fontWeight: 'normal',
        color: 'white'
    },

    impact: {
        borderRadius: '10px',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '50px',
        fontWeight: 'normal',
        color: 'black'
    },

    impact_details: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '40px'
    },
    jury: {
        background: '#ABF0E9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    // Footer
    LowerFooter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '0.5px solid #043230',
        borderBottom: '0.5px solid #043230',
        width: '80%',
        height: 75,
        marginTop: 25
    },

    FooterSocial: {
        margin: '0 10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        backgroundColor: '#222753',
        borderRadius: 20,
        color: '#fff'
    }
});
