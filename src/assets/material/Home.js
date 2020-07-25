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
        width: `${8*10.1}vw`
    },

    // Purpose Box
});
