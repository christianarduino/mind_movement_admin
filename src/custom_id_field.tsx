import {  FieldProps } from "firecms";
import { v4 as uuid } from 'uuid';


export default function CustomIdField({
    property,
    value,
    setValue,
    customProps,
    touched,
    error,
    isSubmitting,
    context, // the rest of the entity values here
    ...props
}: FieldProps<string>) {
    if (value == null) {
        setValue(uuid());
    }
    return (
        <>
        </>
    );
}