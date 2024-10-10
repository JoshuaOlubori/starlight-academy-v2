import frontendScreenshot from "@/assets/front-end.png";
import neonScreenshot from "@/assets/neonScreenshot.png";
import bigqueryScreenshot from "@/assets/bigqueryScreenshot.png";
import airbyteScreenshot from "@/assets/airbyteScreenshot.png";

interface ArchitectureBoxProps {
  title: string;
  image: string;
  technologies: string[];
}

const AppArchitectureComponent: React.FC = () => {
  return (
    <section className="border-4 border-purple-600 p-6">
      <h2 className="text-4xl font-bold mb-4">APP ARCHITECTURE</h2>
      <p className="text-lg mb-4">
        Starlight is built with a modern, scalable architecture designed to handle 
        the complexities of school management and predictive analytics.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ArchitectureBox 
          title="Frontend" 
          image={frontendScreenshot} 
          technologies={[
            'React for dynamic UI', 
            'NextJS for server-side rendering', 
            'Tailwind CSS for styling'
          ]} 
        />
        <ArchitectureBox 
          title="Backend" 
          image={neonScreenshot} 
          technologies={[
            'NextJS', 
            'PostgreSQL database'
          ]} 
        />
        <ArchitectureBox 
          title="Data warehousing and Machine Learning" 
          image={bigqueryScreenshot} 
          technologies={[
            'Google BigQuery for warehousing', 
            'BigQuery ML for machine learning workloads'
          ]} 
        />
        <ArchitectureBox 
          title="Data Integration" 
          image={airbyteScreenshot} 
          technologies={[
            'Airbyte for data integration'
          ]} 
        />
      </div>
    </section>
  );
};

// Apply the props type to ArchitectureBox
const ArchitectureBox: React.FC<ArchitectureBoxProps> = ({ title, image, technologies }) => {
  return (
    <div className="border-2 border-black p-4 flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <img 
        src={image} 
        alt={`${title} architecture diagram`} 
        width={400} 
        height={300} 
        className="mb-4"
      />
      <ul className="list-disc list-inside">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppArchitectureComponent;
