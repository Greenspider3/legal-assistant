// KnowYourRights.js

import React from 'react';
import './KnowYourRights.css';  // Import your CSS file for custom styling

const KnowYourRights = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="navbar-example" className="col-md-2 d-none d-md-block sidebar">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#right1">
                Right to Equality
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#right2">
                Right to Freedom
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#right3">
                Right against Exploitation
              </a>
            </li>
            {/* Add more rights as needed */}
          </ul>
        </nav>

        <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
          <div data-spy="scroll" data-target="#navbar-example" data-offset="0" className="scrollspy-example">
            <div id="right1" className="rights-section">
              <h2>Right to Equality</h2>
              <p>
                The Right to Equality in India is a fundamental right enshrined in Articles 14 to 18 of the Indian Constitution. It ensures that all citizens are treated equally before the law and provides protection against discrimination.
              </p>
              <ul>
                <li>
                  **Equality Before the Law (Article 14):**
                  Article 14 guarantees that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.
                </li>
                <li>
                  **Equal Protection of the Laws (Article 14):**
                  This provision ensures that the State cannot deny any person equal protection of the laws. It prohibits arbitrary and discriminatory actions by the State, ensuring that similar situations are treated alike.
                </li>
                <li>
                  **Prohibition of Discrimination (Article 15):**
                  Article 15 prohibits discrimination on grounds of religion, race, caste, sex, or place of birth. It empowers the State to make special provisions for women and children and for the advancement of socially and educationally backward classes.
                </li>
                <li>
                  **Abolition of Untouchability (Article 17):**
                  Article 17 declares the practice of untouchability to be abolished and forbids its practice in any form. Untouchability is considered a criminal offense, and stringent measures are in place to prevent and punish its occurrence.
                </li>
                <li>
                  **Abolition of Titles (Article 18):**
                  Article 18 prohibits the State from conferring titles, except military and academic distinctions. Indian citizens are not allowed to accept titles from foreign states without the consent of the President.
                </li>
              </ul>
              <p>
                **Significance and Implications:**
                The Right to Equality is foundational to the principles of justice, liberty, and fraternity. It ensures a level playing field for all citizens, fostering a sense of equal dignity and opportunity. The right is justiciable, meaning that individuals can approach the judiciary to seek enforcement if they believe their right to equality is violated.
              </p>
              <p>
                **Legal Remedies:**
                Citizens can seek legal remedies through writ petitions (like habeas corpus, mandamus, etc.) in case of infringement of their right to equality. The judiciary plays a crucial role in interpreting and upholding the right through various landmark judgments.
              </p>
              <p>
                **Landmark Cases:**
                Landmark cases such as Kesavananda Bharati v. State of Kerala, Maneka Gandhi v. Union of India, and others have contributed to the evolution and interpretation of the Right to Equality in India. The Right to Equality reflects the commitment of the Indian Constitution to creating a just and inclusive society, ensuring that all citizens are treated with dignity and are provided equal opportunities.
              </p>
            </div>

            <div id="right2" className="rights-section">
              <h2>Right to Freedom</h2>
              <p>
                The right to freedom includes various freedoms such as freedom of speech and expression, freedom to assemble peacefully, freedom to form associations or unions, and freedom to move freely throughout the territory of India.
              </p>
            </div>

            <div id="right3" className="rights-section">
              <h2>Right against Exploitation</h2>
              <p>
                The right against exploitation prohibits all forms of forced labor and trafficking. It also prohibits the employment of children in hazardous occupations.
              </p>
            </div>
            {/* Add more sections for additional rights */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default KnowYourRights;
