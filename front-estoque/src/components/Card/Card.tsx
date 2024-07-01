import { ReactNode } from "react"

type CardProps = {
    children: ReactNode,
    className? : string
}

const defaultStyle = "card-log flex flex-col items-center";
export const Card = ({children, className}: CardProps) => {
    return(
        <div className={`${defaultStyle} ${className}`}>
            {children}
        </div>
    )
}

