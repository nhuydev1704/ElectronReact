import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

type Props = {
    setValueEditor: Function;
    data: string;
};

export default function Editors(props: Props) {
    const { setValueEditor, data } = props;

    const [value, setValue] = useState<string>('');

    useEffect(() => {
        setValue(data || value);
    }, [data]);

    return (
        <>
            <Editor
                apiKey="hjuz02bsvcykwi6ruki9xpuarsd6l8txzaouzknog6xef2w5"
                onEditorChange={(ct) => {
                    setValue(ct || '');
                    setValueEditor(ct);
                }}
                value={value}
                init={{
                    height: screen.height - 250,
                    plugins:
                        'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
                    editimage_cors_hosts: ['picsum.photos'],
                    menubar: 'file edit view insert format tools table help',
                    toolbar:
                        'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                    toolbar_sticky: true,
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
            />
        </>
    );
}
