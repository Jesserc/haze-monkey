import styles from '../../../styles/local/components/team.module.css'

interface Props {
    onClick: (e: any) => void;  
}
export function ArrowLeft(props: Props){
    return (
        <img onClick={props.onClick} src="images/team/prev.svg" alt="previous" className={["my-auto mr-4", styles.arrow].join(" ")} />
    )
}
export function ArrowRight(props : Props) {
    return (
        <img onClick={props.onClick} src="images/team/next.svg" alt="next" className={["my-auto ", styles.arrow].join(" ")} />
    )
}