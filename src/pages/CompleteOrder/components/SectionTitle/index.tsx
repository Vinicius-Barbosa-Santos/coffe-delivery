import { ReactNode } from 'react'
import { RegularText } from '../../../../components/Typografy'
import * as C from './styles'

interface SectionTitleProps {
    title: string,
    subtitle: string,
    icon: ReactNode
}

export const SectionTitle = ({ title, subtitle, icon }: SectionTitleProps) => {
    return (
        <C.SectionTitleContainer>
            {icon}
            <div>
                <RegularText color="subtitle">{title}</RegularText>
                <RegularText size="s">{subtitle}</RegularText>
            </div>
        </C.SectionTitleContainer>
    )
}