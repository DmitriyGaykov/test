import IFooterBlock from "./IFooterBlock";
import FooterElement from "./FooterElement";

const FooterBlock = (props : IFooterBlock) =>
{
    return (
        <div className={"footer-block " + props.className}>
            {
                props.els.map(el =>  <FooterElement text={el.text} url={el.url} urlTo={el.urlTo} />)
            }
        </div>
        );
}

export default FooterBlock;