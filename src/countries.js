// ====================
// Project
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// August 17, 2026
// --------------------
// This program demonstrates react, routing, api integration and rendering
// ====================
import './countries.css';
// Project Requirement: component 4 - information about 2 countries,
function Countries() {
    return (
        <>
        <div className="countries-container">
            {/* Country 1 - Canada */}
            <div className="country1-info">
                <h3>Canada</h3>
                <img src="/images/canada-flag.png" alt="Canada Flag" className="country-flag" />
                <p><strong>Capital:</strong> Ottawa</p>
                <p><strong>Region:</strong> North America</p>
                <p><strong>Largest City:</strong> Toronto</p>
                <p><strong>Official Language:</strong> English, French</p>
                <p><strong>Population:</strong> ≈ 41 million</p>
                <p><strong>Currency:</strong> Canadian Dollar (CAD - $)</p>
                <p><strong>Fun Fact:</strong> Canada has hosted 3 Olympics. Montreal, Quebec in 1976, Calgary, Alberta in 1988, and Vancouver, British Columbia in 2010.</p>
                <p><strong>Tourism Website:</strong> <a href="https://travel.gc.ca/canadian-tourism" target="blank" rel="noopener noreferrer">Canada Official Tourism Website</a></p>
                <img src="/images/canada-scenic.jpg" alt="Canada Scenic View" className="country-scenic" />
            </div>

            {/* Country 2 - South Korea */}
            <div className="country2-info">
                <h3>South Korea</h3>
                <img src="/images/south-korea-flag.png" alt="South Korea Flag" className="country-flag" />
                <p><strong>Capital:</strong> Seoul</p>
                <p><strong>Region:</strong> East Asia</p>
                <p><strong>Largest City:</strong> Seoul</p>
                <p><strong>Official Language:</strong> Korean</p>
                <p><strong>Population:</strong> ≈ 51 million</p>
                <p><strong>Currency:</strong> South Korean Won (KRW - ₩)</p>
                <p><strong>Fun Fact:</strong> The Hangeul language was created to increase literacy.</p>
                <p><strong>Tourism Website:</strong> <a href="https://english.visitkorea.or.kr/svc/main/index.do" target="blank" rel="noopener noreferrer">South Korea Official Tourism Website</a></p>
                <img src="/images/south-korea-scenic.jpg" alt="South Korea Scenic View" className="country-scenic" />
            </div>
        </div>
        </>
    );
}

export default Countries;
