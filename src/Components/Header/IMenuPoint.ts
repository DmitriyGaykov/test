interface IMenuPoint
{
    text: string;
    url: string;
    className: string | null;
    href: string | null;
    burger: React.Dispatch<React.SetStateAction<boolean>> | null;
}

export default IMenuPoint;