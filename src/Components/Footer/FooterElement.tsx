import IFooterElement from "./IFooterElement";

const FooterElement = (props : IFooterElement) =>
{
    return (
        <a className='footer-element' href={props.urlTo}>
            <img src={props.url} alt={props.text} />
            <span className="text">{props.text}</span>
        </a>);
}

export default FooterElement;