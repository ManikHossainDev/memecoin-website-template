'use client';

const Page = () => {
  const fileId = "1JZ-bJEZh70kbYsTfPcExqzbTnX_51dD4";
  
  // Alternative embed URLs
  const googleDriveEmbed = `https://drive.google.com/file/d/${fileId}/preview`;
  const googleDocsViewer = `https://docs.google.com/viewer?url=https://drive.google.com/uc?id=${fileId}&embedded=true`;

  return (
    <div className="xl:container mx-auto px-4 py-8">
      {/* Primary method */}
      <div className="pdf-container mb-4">
        <iframe 
          src={googleDriveEmbed}
          className="pdf-iframe"
          title="PDF Viewer - Drive Preview"
        />
      </div>

      {/* Fallback option */}
      <div className="text-center">
        <a 
          href={`https://drive.google.com/file/d/${fileId}/view`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          PDF download ba notun tab-e open korte ekhane click koro
        </a>
      </div>

      <style jsx>{`
        .pdf-container {
          width: 100%;
          height: 800px;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
    </div>
  );
}

export default Page;