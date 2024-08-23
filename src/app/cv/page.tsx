export default function Page() {
    return (
        <>
            <div className="border-b-4 border-blue-300 pb-4 text-center">
                <h2 className="text-4xl font-bold">CV</h2>
            </div>
            <div className="mt-4 flex min-h-44 flex-col justify-center rounded-xl bg-blue-500 p-5 text-center text-white">
                <p>
                    You can download my Curriculum Vitae Word document 
                    
                    <a href="/documents/cv.pdf" 
                        rel="CV" 
                        title="Curriculum Vitae - David Brablc.docx" 
                        download="Curriculum Vitae - David Brablc"
                    >
                        <span> </span>
                        <strong><u>here</u></strong>
                    </a>.
                </p>
            </div>
        </>
    );
}