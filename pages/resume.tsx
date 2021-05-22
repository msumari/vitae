import Bar from "../components/Bar";
import { language, tools } from "../data";

const resume = () => {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              B.sc Information Technology
            </h5>
            <p className="font-semibold">
              National Institute of Technology(2017-2020)
            </p>
            <p className="my-3">Graduated in 2020 with Bachelor Degree</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Developer</h5>
            <p className="font-semibold">Robotech Labs(2019-on)</p>
            <p className="my-3">
              Architechure, development and testing of various software products
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Tech Stack</h5>
          <div className="my-2">
            {language.map((lang) => (
              <Bar data={lang} key={lang.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
