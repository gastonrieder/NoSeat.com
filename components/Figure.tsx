export const Figure = ({ 
  src, 
  alt, 
  caption 
}: { 
  src: string;
  alt: string;
  caption: string;
}) => (
  <div style={{ textAlign: 'left', maxWidth: '500px', margin: '0' }}>
    <img src={src} alt={alt} style={{ maxWidth: '100%' }} />
    <p style={{ fontSize: '0.9em', color: 'gray', marginTop: '8px' }}>
      {caption}
    </p>
  </div>
);