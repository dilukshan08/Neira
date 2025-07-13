import React from 'react'

const Homepage = () => {
    return (
        <div classname='home'>
            <div className='navbar'>Neira Tec Solutions's Job portal </div>
            <div className='introduction'>Careers at Neira tec
                <div className='introduction-text'>
                    Life is full of moments that define who we are. Here, everyone can create <br />
                    moments that give them a sense of purpose. #cutting‑edge_digital_solutions
                </div>
                <div className='introduction-button'>
                    See available positions
                </div>
            </div>
            <div className='job-intro'>
                At Neirah Tec Solutions, we believe that fostering a culture of agility, collaboration, trust, and grit<br />
                is essential to creating a workplace where every individual can thrive. These<br />
                values form the foundation of our inclusive environment, empowering each of us<br />
                to make meaningful contributions, work dynamically, and achieve success<br />
                together. We strive to give every team member experiences that instill pride and create moments that matter.
            </div>
            <div className='job-vertical'>
                <div class="job-vertical-list">
                    <h1>Job positions at our Software Solutions</h1>
                    <p>Chief Executive Officer (CEO)</p>
                    <p>Chief Technology Officer (CTO)</p>
                    <p>Chief Operating Officer (COO)</p>
                    <p>Chief Marketing Officer (CMO)</p>
                    <p>Director of Engineering</p>
                    <p>Director of Product</p>
                    <p>Full Stack Developer</p>
                    <p>Frontend Developer (React.js, Vue.js)</p>
                    <p>Backend Developer (Node.js, Python, Java)</p>
                    <p>DevOps Engineer</p>
                    <p>Mobile App Developer</p>
                    <p>QA Engineer / Test Automation Engineer</p>
                    <p>AI/ML Engineer</p>
                    <p>Data Scientist</p>
                    <p>Cloud Solutions Architect</p>
                    <p>Cybersecurity Analyst</p>
                    <p>Product Manager</p>
                    <p>UI/UX Designer</p>
                    <p>Business Analyst</p>
                    <p>Technical Writer</p>
                    <p>Digital Marketing Executive</p>
                    <p>SEO/SEM Specialist</p>
                    <p>Content Creator / Copywriter</p>
                    <p>Social Media Manager</p>
                    <p>Sales Manager</p>
                    <p>Customer Success Manager</p>
                    <p>HR Manager</p>
                    <p>Operations Coordinator</p>
                    <p>IT Support Specialist</p>
                    <p>Office Administrator</p>
                    <p>Finance Officer</p>
                    <p>Intern</p>
                </div>
            </div>
            <div class='join-neirah-section'>
                <h2>Ready to Join Neirah Tec Solutions?</h2>
                <p>If you're interested in any of the positions listed above, we invite you to take the next step in your career journey with us.</p>
                <p> Please upload your latest resume/CV through this portal — our team will carefully review your application and get in touch if your profile aligns with our current openings.</p>
                <p>We’re excited to learn more about you and how you can contribute to our growing team at Neirah Tec Solutions.</p>
                <p class="cta-text"><strong>Apply now</strong> and let’s build the future together!</p>
            </div>
            <form class="upload-form" enctype="multipart/form-data">
                <label for="resume"> Upload Your Resume/CV</label>
                <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
                <button type="submit">Submit Application</button>
            </form>
        </div>
    )
}

export default Homepage