import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Venture",
  description: "The terms and conditions governing use of the Venture Social platform.",
};

const legalStyles = `
  .legal-prose { color: #9399c0; font-size: 15px; line-height: 1.75; }
  .legal-prose h2 {
    font-family: var(--font-squada-one);
    font-size: 1.35rem;
    color: #e8eaff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    scroll-margin-top: 5rem;
  }
  .legal-prose h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #c0c4e0;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    scroll-margin-top: 5rem;
  }
  .legal-prose p { margin-bottom: 1rem; }
  .legal-prose a { color: #fd4fe9; text-decoration: underline; text-underline-offset: 2px; word-break: break-word; }
  .legal-prose a:hover { color: #e8eaff; }
  .legal-prose ul { margin: 0.5rem 0 1rem 1.5rem; list-style-type: square; }
  .legal-prose ul ul { list-style-type: circle; }
  .legal-prose ol { margin: 0.5rem 0 1rem 1.5rem; }
  .legal-prose ol li { list-style-type: decimal; margin-bottom: 0.35rem; }
  .legal-prose li { margin-bottom: 0.4rem; }
  .legal-prose strong { color: #c0c4e0; font-weight: 600; }
  .legal-prose em { font-style: italic; }
  .legal-prose u { text-decoration: underline; text-underline-offset: 3px; }
  .legal-prose .toc-list { list-style-type: none; margin-left: 0; }
  .legal-prose .toc-list li { margin-bottom: 0.25rem; }
  .legal-prose address { font-style: normal; line-height: 1.8; }
  .legal-prose .safety-box {
    background: rgba(253,79,233,0.07);
    border: 1px solid rgba(253,79,233,0.25);
    border-radius: 10px;
    padding: 1rem 1.25rem;
    margin: 1.25rem 0;
    color: #c0c4e0;
  }
  .legal-prose .safety-box strong { color: #fd4fe9; }
`;

const termsContent = `
<p>These Terms of Service ("Legal Terms") constitute a legally binding agreement between you and <strong>Venture Collective LLC</strong>, a limited liability company organized under the laws of Illinois, doing business as <strong>Venture Social</strong> ("Company," "we," "us," or "our"), concerning your access to and use of the Venture Social mobile application and any related services (collectively, the "Service").</p>
<p>By accessing or using the Service, you confirm that you have read, understood, and agree to be bound by these Legal Terms. <strong>You must be at least 18 years old to use the Service.</strong> If you do not agree with these Legal Terms in their entirety, you are expressly prohibited from using the Service and must discontinue use immediately.</p>
<p>We reserve the right to make changes to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date. It is your responsibility to periodically review these Legal Terms.</p>

<h2 id="toc">Table of Contents</h2>
<ol class="toc-list">
  <li><a href="#agreement">1. Agreement to Our Legal Terms</a></li>
  <li><a href="#our-services">2. Our Services</a></li>
  <li><a href="#intellectual-property">3. Intellectual Property Rights</a></li>
  <li><a href="#user-representations">4. User Representations</a></li>
  <li><a href="#user-registration">5. User Registration</a></li>
  <li><a href="#prohibited-activities">6. Prohibited Activities</a></li>
  <li><a href="#user-generated-contributions">7. User Generated Contributions</a></li>
  <li><a href="#mobile-application-license">8. Mobile Application License</a></li>
  <li><a href="#services-management">9. Services Management</a></li>
  <li><a href="#privacy-policy">10. Privacy Policy</a></li>
  <li><a href="#term-and-termination">11. Term and Termination</a></li>
  <li><a href="#modifications-and-interruptions">12. Modifications and Interruptions</a></li>
  <li><a href="#governing-law">13. Governing Law</a></li>
  <li><a href="#dispute-resolution">14. Dispute Resolution</a></li>
  <li><a href="#corrections">15. Corrections</a></li>
  <li><a href="#disclaimer">16. Disclaimer</a></li>
  <li><a href="#limitations-of-liability">17. Limitations of Liability</a></li>
  <li><a href="#indemnification">18. Indemnification</a></li>
  <li><a href="#user-data">19. User Data</a></li>
  <li><a href="#electronic-communications">20. Electronic Communications, Transactions, and Signatures</a></li>
  <li><a href="#california-users">21. California Users and Residents</a></li>
  <li><a href="#miscellaneous">22. Miscellaneous</a></li>
  <li><a href="#contact-us">23. Contact Us</a></li>
</ol>

<h2 id="agreement">1. Agreement to Our Legal Terms</h2>
<p>These Legal Terms govern your access to and use of the Venture Social mobile application and related services, which are owned and operated by <strong>Venture Collective LLC</strong>, doing business as <strong>Venture Social</strong>. By downloading, installing, or using the Service in any manner, you acknowledge that you have read, understood, and agree to be bound by these Legal Terms, including all policies incorporated herein by reference.</p>
<p><strong>You must be at least 18 years of age to use the Service.</strong> By using the Service, you represent and warrant that you meet this age requirement. If you do not agree with any part of these Legal Terms, you are prohibited from using the Service and must cease use immediately.</p>
<p>The Service is currently provided free of charge. We reserve the right to introduce fees in the future, and will provide reasonable notice before doing so.</p>

<h2 id="our-services">2. Our Services</h2>
<p>Venture Social is a mobile application that enables verified college students to discover and create spontaneous in-person meetups with other nearby verified students. Use cases include, but are not limited to, casual coffee chats, study sessions, gym workouts, and informal social hangouts.</p>
<p>Access to the Service is limited to individuals who verify their enrollment at an accredited college or university through a valid <strong>.edu email address</strong>. The Service is designed to facilitate real-world, in-person connections between verified members of college communities.</p>
<p>The Service is provided <strong>"as is"</strong> and is currently available free of charge. We make no guarantee that the Service will remain free or that any particular feature will remain available.</p>
<p>The information provided on the Service is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.</p>

<h2 id="intellectual-property">3. Intellectual Property Rights</h2>
<p><em><strong>In Short:</strong> We own the Service and all of its contents.</em></p>
<p>We are the owner or licensee of all intellectual property rights in the Service, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks"). The Content and Marks are protected by copyright, trademark, and other intellectual property laws of the United States and internationally.</p>
<p>The Content and Marks are provided in the Service "as is" for your personal, non-commercial use or internal business purposes only. Subject to your compliance with these Legal Terms, we grant you a <strong>limited, non-exclusive, non-transferable, revocable license</strong> to access and use the Service and to display the Content solely for your personal, non-commercial purposes. Except as expressly set forth in these Legal Terms, no part of the Service, Content, or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
<p>All rights not expressly granted to you in these Legal Terms are reserved by us.</p>

<h2 id="user-representations">4. User Representations</h2>
<p>By using the Service, you represent and warrant that:</p>
<ol>
  <li>You are at least 18 years of age;</li>
  <li>All registration information you submit is truthful, accurate, current, and complete, and you will maintain the accuracy of such information;</li>
  <li>You have the legal capacity and authority to enter into these Legal Terms and to abide by them;</li>
  <li>You will not use the Service for any illegal or unauthorized purpose;</li>
  <li>Your use of the Service will not violate any applicable law or regulation, including without limitation any local, state, national, or international law; and</li>
  <li>Your use of the Service will not violate any provision of these Legal Terms.</li>
</ol>
<p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Service.</p>

<h2 id="user-registration">5. User Registration</h2>
<p>You are required to register with the Service using a valid <strong>.edu email address</strong> issued by an accredited college or university. By registering, you agree that the email address you provide is your own and accurately reflects your active enrollment status.</p>
<p>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to safeguard your credentials.</p>
<p>You may not transfer your account to any other person. Each account is personal to the registered user and non-transferable. We reserve the right to remove or reclaim any username we determine, in our sole discretion, to be inappropriate, obscene, offensive, or otherwise in violation of these Legal Terms.</p>

<h2 id="prohibited-activities">6. Prohibited Activities</h2>
<p>You may only use the Service for the purposes for which it is made available. As a user of the Service, you agree not to:</p>
<ul>
  <li>Systematically retrieve data or other content from the Service to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us;</li>
  <li>Trick, defraud, or mislead us or other users, especially in any attempt to learn sensitive account information such as user passwords;</li>
  <li>Circumvent, disable, or otherwise interfere with security-related features of the Service, including features that prevent or restrict the use or copying of any Content;</li>
  <li>Disparage, tarnish, or otherwise harm, in our opinion, the reputation of Venture Collective LLC or the Venture Social brand;</li>
  <li>Use any information obtained from the Service to harass, abuse, or harm another person;</li>
  <li>Make improper use of our support services or submit false reports of abuse or misconduct;</li>
  <li>Use the Service in a manner inconsistent with any applicable laws or regulations;</li>
  <li>Engage in unauthorized framing of or linking to the Service;</li>
  <li>Upload or transmit (or attempt to upload or transmit) viruses, Trojan horses, or other material that interferes with any party's use or enjoyment of the Service;</li>
  <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools;</li>
  <li>Delete the copyright or other proprietary rights notice from any Content;</li>
  <li>Attempt to impersonate another user or person, or use the username of another user;</li>
  <li>Harass, annoy, intimidate, or threaten any of our employees, agents, or other users;</li>
  <li>Upload or transmit (or attempt to upload or transmit) any material that acts as a passive or active information collection or transmission mechanism;</li>
  <li>Interfere with, disrupt, or create an undue burden on the Service or the networks or services connected to the Service;</li>
  <li>Attempt to bypass any measures designed to prevent or restrict access to the Service, or any portion thereof;</li>
  <li>Use the Service to advertise or offer to sell goods and services;</li>
  <li>Sell or otherwise transfer your profile or account;</li>
  <li>Post or transmit sexually explicit material of any kind;</li>
  <li>Use the application while operating a motor vehicle, heavy machinery, or in any context where inattention could endanger yourself or others; or</li>
  <li>Copy or adapt the Service's software, including but not limited to Flash, PHP, HTML, JavaScript, or other code, or violate any third party's intellectual property rights.</li>
</ul>

<h2 id="user-generated-contributions">7. User Generated Contributions</h2>
<p>The Service allows users to create, submit, post, display, transmit, and share content, including profile information, session titles and descriptions, and in-app chat messages (collectively, "Contributions"). Contributions may be visible to other users of the Service.</p>
<p>By posting Contributions, you grant us a <strong>worldwide, non-exclusive, royalty-free, sublicensable, and transferable license</strong> to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, publicly display, and perform your Contributions solely for the purposes of operating, improving, and promoting the Service.</p>
<p>You represent and warrant that:</p>
<ul>
  <li>You own or have the necessary rights and licenses to post the Contributions you submit;</li>
  <li>Your Contributions do not violate the privacy rights, publicity rights, copyright, trademark, or other intellectual property rights of any third party; and</li>
  <li>Your Contributions comply with these Legal Terms and all applicable laws.</li>
</ul>
<p>We are not responsible or liable for the content of any Contributions posted by users. We reserve the right, but not the obligation, to monitor, edit, or remove any Contributions at our sole discretion and without notice, for any reason, including Contributions we determine violate these Legal Terms or applicable law.</p>

<h2 id="mobile-application-license">8. Mobile Application License</h2>
<p>If you access the Service via a mobile application, we grant you a <strong>revocable, non-exclusive, non-transferable, limited license</strong> to install and use the mobile application on wireless electronic devices owned or controlled by you, and to access and use the application on such devices strictly in accordance with these Legal Terms.</p>
<p>You shall not:</p>
<ul>
  <li>Decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the application;</li>
  <li>Make any modification, adaptation, improvement, enhancement, translation, or derivative work from the application;</li>
  <li>Violate any applicable laws, rules, or regulations in connection with your access or use of the application;</li>
  <li>Remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the application;</li>
  <li>Use the application for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended;</li>
  <li>Make the application available over a network or other environment permitting access or use by multiple devices or users at the same time;</li>
  <li>Use the application to send automated queries to any website or to send any unsolicited commercial email; or</li>
  <li>Use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the application.</li>
</ul>

<h2 id="services-management">9. Services Management</h2>
<p>We reserve the right, but not the obligation, to:</p>
<ul>
  <li>Monitor the Service for violations of these Legal Terms;</li>
  <li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities;</li>
  <li>Refuse, restrict, limit, or disable access to the Service or any portion thereof to any person, for any reason or for no reason, in our sole discretion and without limitation, notice, or liability;</li>
  <li>Remove from the Service or otherwise disable any Contributions or content that, in our sole discretion, is excessive in size or otherwise burdensome to our systems; and</li>
  <li>Otherwise manage the Service in a manner designed to protect our rights and property and to facilitate the proper functioning of the Service.</li>
</ul>

<h2 id="privacy-policy">10. Privacy Policy</h2>
<p>We care about your privacy and the security of your data. Please review our <a href="/privacy">Privacy Policy</a>, which describes how we collect, use, and share information about you when you use our Service. By using the Service, you consent to all actions taken by us with respect to your information in accordance with the Privacy Policy.</p>
<p>The Service is hosted in the United States. If you are accessing the Service from outside the United States, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by third parties with whom we share your information in the United States and other countries.</p>

<h2 id="term-and-termination">11. Term and Termination</h2>
<p>These Legal Terms shall remain in full force and effect while you use the Service. <strong>Without limiting any other provision of these Legal Terms, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Service (including blocking certain IP addresses) to any person for any reason or for no reason, including without limitation for breach of any representation, warranty, or covenant contained in these Legal Terms or of any applicable law or regulation.</strong></p>
<p>We may terminate your use or participation in the Service or delete your account and any content or information you posted at any time, without warning, at our sole discretion.</p>
<p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including pursuing civil, criminal, and injunctive relief.</p>

<h2 id="modifications-and-interruptions">12. Modifications and Interruptions</h2>
<p>We reserve the right to change, modify, or remove the contents of the Service at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Service without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Service.</p>
<p>We cannot guarantee the Service will be available at all times. We may experience hardware, software, or other problems, or need to perform maintenance related to the Service, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Service at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Service during any downtime or discontinuance of the Service.</p>
<p>We will endeavor to provide at least <strong>7 days' advance notice</strong> of material changes to ongoing features of the Service where reasonably practicable. However, bug fixes, security updates, new functionality additions, and changes required by court order may take effect immediately without prior notice.</p>

<h2 id="governing-law">13. Governing Law</h2>
<p>These Legal Terms and your use of the Service are governed by and construed in accordance with the laws of the <strong>State of Illinois</strong>, United States of America, applicable to agreements made and to be entirely performed within the State of Illinois, without regard to its conflict of law principles.</p>

<h2 id="dispute-resolution">14. Dispute Resolution</h2>
<h3>Informal Negotiations</h3>
<p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us, the parties agree to first attempt to negotiate any Dispute informally for at least <strong>thirty (30) days</strong> before initiating arbitration. Such informal negotiations commence upon written notice from one party to the other. During this period, the parties agree to act in good faith to resolve the Dispute.</p>
<h3>Binding Arbitration</h3>
<p>If the parties are unable to resolve a Dispute through informal negotiations within thirty (30) days, the Dispute shall be finally and exclusively resolved by binding arbitration. The arbitration shall be conducted in <strong>Cook County, Illinois</strong> under the Commercial Arbitration Rules of the <strong>American Arbitration Association ("AAA")</strong>. The arbitration shall be conducted in English by a single arbitrator. The arbitrator's award shall be binding and may be entered as a judgment in any court of competent jurisdiction.</p>
<h3>Restrictions</h3>
<p>The parties agree that any arbitration shall be limited to the Dispute between the parties individually. To the full extent permitted by law: (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class-action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</p>
<h3>Exceptions to Informal Negotiations and Arbitration</h3>
<p>The parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any intellectual property rights of a party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. Such Disputes may be brought and litigated in a court of competent jurisdiction.</p>

<h2 id="corrections">15. Corrections</h2>
<p>There may be information on the Service that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Service at any time, without prior notice.</p>

<h2 id="disclaimer">16. Disclaimer</h2>
<p><strong>THE SERVICE IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICE'S CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICE.</strong></p>
<p>We do not warrant that: (a) the Service will meet your requirements; (b) the Service will be uninterrupted, timely, secure, or error-free; (c) the results that may be obtained from the use of the Service will be accurate or reliable; or (d) any errors in the Service will be corrected.</p>
<div class="safety-box">
  <p><strong>CRITICAL SAFETY DISCLAIMER:</strong> Venture Social facilitates connections between users that may result in in-person meetups in the real world. <strong>We are not responsible for the conduct, actions, or omissions of any user during or after any meetup.</strong> Users acknowledge and agree that they assume all risks associated with meeting other users in person. Venture Collective LLC is not a chaperone, escort service, or background-check service. We do not screen, verify the identity of, or conduct background checks on our users beyond email verification. You are solely responsible for exercising appropriate caution and judgment when choosing to meet another user in person. Always meet in public places and take reasonable precautions for your personal safety.</p>
</div>

<h2 id="limitations-of-liability">17. Limitations of Liability</h2>
<p><strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, AGENTS, OR SERVICE PROVIDERS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</strong></p>
<p>NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE TWELVE (12) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING, OR, IF NO AMOUNT HAS BEEN PAID, TO <strong>ONE HUNDRED US DOLLARS ($100.00)</strong>. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</p>

<h2 id="indemnification">18. Indemnification</h2>
<p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of:</p>
<ol>
  <li>Your use of the Service;</li>
  <li>Your breach of these Legal Terms;</li>
  <li>Any breach of your representations and warranties set forth in these Legal Terms;</li>
  <li>Your violation of the rights of a third party, including but not limited to intellectual property rights; or</li>
  <li>Any overt harmful act toward any other user of the Service with whom you connected via the Service.</li>
</ol>
<p>Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</p>

<h2 id="user-data">19. User Data</h2>
<p>We will maintain certain data that you transmit to the Service for the purpose of managing the performance of the Service, as well as data relating to your use of the Service. Although we perform regular routine data backups, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Service.</p>
<p>You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data. Please review our <a href="/privacy">Privacy Policy</a> for further information on how we handle your data.</p>

<h2 id="electronic-communications">20. Electronic Communications, Transactions, and Signatures</h2>
<p>Visiting the Service, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Service, satisfy any legal requirement that such communication be in writing.</p>
<p><strong>YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICE.</strong> You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>

<h2 id="california-users">21. California Users and Residents</h2>
<p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834, or by telephone at (800) 952-5210 or (916) 445-1254.</p>
<p>Pursuant to California Civil Code Section 1789.3, California users of the Service are entitled to the following specific consumer rights notice: The provider of the Service is Venture Collective LLC, 333 W Hubbard St, Suite 309, Chicago, IL 60654. To file a complaint regarding the Service or to receive further information regarding use of the Service, a California resident may contact us at the above address or at <a href="mailto:grant@venturesocialapp.com">grant@venturesocialapp.com</a>.</p>

<h2 id="miscellaneous">22. Miscellaneous</h2>
<p><strong>Entire Agreement.</strong> These Legal Terms, together with the Privacy Policy and any other legal notices or policies published by us on the Service, constitute the entire agreement between you and Venture Collective LLC with respect to the Service and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, with respect to the Service.</p>
<p><strong>Severability.</strong> If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions.</p>
<p><strong>No Waiver.</strong> Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law.</p>
<p><strong>No Third-Party Beneficiaries.</strong> These Legal Terms do not and are not intended to confer any rights or remedies upon any person other than you and Venture Collective LLC.</p>
<p><strong>Assignment.</strong> We may assign any or all of our rights and obligations to others at any time. You may not assign or transfer any of your rights or obligations under these Legal Terms without our prior written consent.</p>

<h2 id="contact-us">23. Contact Us</h2>
<p>In order to resolve a complaint regarding the Service or to receive further information regarding use of the Service, please contact us at:</p>
<address>
  <strong>Venture Collective LLC</strong><br>
  333 W Hubbard St, Suite 309<br>
  Chicago, IL 60654<br>
  United States<br><br>
  Email: <a href="mailto:grant@venturesocialapp.com">grant@venturesocialapp.com</a>
</address>
`;

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen city-grid-subtle">
      <style>{legalStyles}</style>

      {/* ─── NAV ─────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 lg:px-10 h-16 border-b border-border bg-bg/70 backdrop-blur-xl">
        <a href="/" className="font-headline text-[22px] tracking-widest uppercase text-white">
          Venture
        </a>
        <a
          href="/#waitlist"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-magenta px-5 py-2 text-[13px] font-bold text-bg tracking-wide glow-magenta transition-all hover:scale-[1.03]"
        >
          Get Early Access
        </a>
        <a
          href="/#waitlist"
          className="sm:hidden text-[13px] font-semibold text-magenta"
        >
          Join →
        </a>
      </header>

      <main className="flex-1 px-6 lg:px-10 pt-32 pb-24">
        <div className="max-w-3xl mx-auto animate-fade-up">
          {/* Page header */}
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-mint">
              Legal
            </span>
            <h1 className="font-headline text-[clamp(48px,8vw,80px)] leading-[0.95] text-white">
              Terms of Service
            </h1>
            <p className="text-[14px] text-[#4a4f7a]">Last Updated: April 25, 2026</p>
          </div>

          {/* Legal content */}
          <div
            className="legal-prose"
            dangerouslySetInnerHTML={{ __html: termsContent }}
          />
        </div>
      </main>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer className="border-t border-border px-6 lg:px-10 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <span className="font-headline text-[20px] tracking-widest uppercase text-white">
            Venture
          </span>

          <div className="flex items-center gap-8">
            <a href="/privacy" className="text-[13px] text-[#4a4f7a] hover:text-white transition-colors font-medium">
              Privacy
            </a>
            <a href="/terms" className="text-[13px] text-[#4a4f7a] hover:text-white transition-colors font-medium">
              Terms
            </a>
            <a href="/contact" className="text-[13px] text-[#4a4f7a] hover:text-white transition-colors font-medium">
              Contact
            </a>
          </div>

          <p className="text-[13px] text-[#30355a] font-medium">
            © 2026 Venture Social Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
