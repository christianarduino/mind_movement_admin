import React, { ReactElement } from "react";
import { PropertyPreviewProps } from "firecms";

import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxOutlined from "@mui/icons-material/CheckBoxOutlined";

export default function CustomVideoPreview({
    value, property, size
}: PropertyPreviewProps<boolean, any, Record<string, any>>)
{
    if(value){
        
    }
    return (value ? <CheckBoxOutlined/> : <CheckBoxOutlineBlank/ >);
}
