import { twMerge } from "tailwind-merge"
import WorkForFreelaLogo from "../assets/workforfreela_logo.svg"
interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> { }

export const Logo = ({ className, ...props }: LogoProps) => {
    return (
        <img className={twMerge("place-self-center", className)} {...props} src={WorkForFreelaLogo} alt="" />
    )
}
