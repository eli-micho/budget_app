import { StyledButton } from './ButtonStyles';

export enum Variants {
    primary,
    secondary,
}
export type Props = {
    children?: node;
    variant?: Variants;
};

const Button = ({
    children = undefined,
    variant = Variants.primary,
}: Props) => {
    return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;
