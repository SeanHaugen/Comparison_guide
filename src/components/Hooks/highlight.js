//custom react Hook!

const highlight = (item, item2, item3) => {
    switch(true) {
        case (item3 === item || item3 === undefined):
            return '';
        case (item3 !== item && (item3 === item2 || item2 === undefined || item2 === item)):
            return 'highlight';
        case (item3 !== item && item3 !== item2):
            return 'highlight2';
        
        default:
            return ''
    }
}

export default highlight;