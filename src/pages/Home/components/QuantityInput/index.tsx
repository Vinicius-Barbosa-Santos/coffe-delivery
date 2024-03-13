import { QuantityInputContainer } from "./styles"

export const QuantityInput = () => {
    return (
        <QuantityInputContainer>
            <input type="number" readOnly value={1} />
        </QuantityInputContainer>
    )
}