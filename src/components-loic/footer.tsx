type Props = {
    imgSrc:string;
    copyright:string;
};

export const Footer= ({imgSrc, copyright,}: Props) => {
    return (
        <>
            <img className="logo" src={imgSrc} alt={"logo"}/>
            <p className="copyright">{copyright}</p>
        </>
    )
};