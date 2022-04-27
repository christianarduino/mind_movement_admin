import React from "react";
import { TextField } from "@mui/material";
import { FieldDescription, FieldProps } from "@camberi/firecms";
import { Visibility } from "@mui/icons-material";
const uuid = require('uuid');


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
        setValue(uuid.v4());
    }
    return (
        <>
        </>
    );
}