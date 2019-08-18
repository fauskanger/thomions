
export const simpleReplicas = p => {
    let headerHeight = 0;
    let footerHeight = 0;

    p.setup = () => {
        p.createCanvas(
            window.innerWidth - 10,
            window.innerHeight - footerHeight - headerHeight - 30);
        p.rectMode(p.CENTER);
        p.textAlign(p.CENTER);

        p.background(33);
    };

    p.draw = () => {
        p.fill(200);
        p.stroke(33);
        p.textSize(25);
        p.text('Work in progress', p.width / 2, p.height / 2 - 50);
        p.textSize(20);
        p.text('Please visit again another time.', p.width / 2, p.height / 2 + 50);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        const {
            headerHeight: headerHeightProp=0,
            footerHeight: footerHeightProp=0
        } = props;
        headerHeight = headerHeightProp;
        footerHeight = footerHeightProp;
    };

};