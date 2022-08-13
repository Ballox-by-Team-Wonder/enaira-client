import image from './testImage.jpg'
import './document.style.css'

export function AffidavitDoc() {
    const affidavit = JSON.parse(localStorage.getItem('affidavit'))
    
    return (
      <div className="document">
        <h2 className="text-center mb-2 display-6 fw-bold">IN THE HIGH COURT OF ABUJA OF NIGERIA IN THE ABUJA JUDICIAL DIVISION HOLDEN AT NIGERIA</h2>
        <h4 className="text-center mb-2 fw-bold">AFFIDAVIT OF FACTS FOR CORRECTION OF NAME</h4>

        <p>
          I {affidavit?.correct || "John Doe"}, male, muslim, a native OF OTOLO NNEWI, in NNEWI NORTH, Local Government area of ANAMBRA STATE, a citizen of the Federal Republic of Nigeria, residing
          now at ENUGU do hereby make an Oath and state as follows
        </p>

        <p>1. That I am the deponent in this affidavit.</p>

        <p>
          2. That my <span class="fw-bold">BANK ACCOUNT DETAILS</span> wrongly captured my name as <span class="fw-bold"> {affidavit?.correct || "John Doe"} </span> instead of
          <span class="fw-bold"> {affidavit?.incorrect || "James Doe"} .</span>
        </p>

        <p>
          3. My correct name is <span class="fw-bold">{affidavit?.correct || "James Doe"} hence this affidavit .</span>
        </p>

        <p>
          4. That <span class="fw-bold">Banks, the Authories concerned and the General Pubic </span> should take note.
        </p>

        <p>5. That I depose to the above facts in good faith.</p>

        <p>6. That I depose to the above facts in good faith.</p>
            
        <p>I solemnly swear that the information given by me is true and correct to the best of my knowledge and belief.</p>

        <img
          src="data:image/png;base64,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"
          alt=""
          style={{
            marginTop: "30px",
            height: "70px",
          }}
        />
      </div>
    );
}