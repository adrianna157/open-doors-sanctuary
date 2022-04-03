import React, { useContext } from "react";
import { validatePageTwo } from "../../helpers/createAccount/createAccountValidation.js";
import HeaderText from "../../components/HeaderText";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import Page from "../../components/Page";
import Container from "../../components/Container";
import AuthHeader from "../../components/AuthHeader";
import { NotificationContext } from "../../helpers/AlertContext/AlertContext.js";
import AlertHandler from "../../components/AlertHandler/index.js";

const TermsModal= (props) => {
  const [alert, setAlert] = useContext(NotificationContext);

  let { pageChange, signUp } = props;


  return (
    <Page noLeftMargin>
      <AuthHeader />
      <Container
        grayedBackground
        height="lg:h-63pr"
        width="w-96pr lg:w-35pr"
        padding="pt-3pr px-4pr"
        className="flex flex-col light-grey-text"
        margin="mx-auto"
        mariginTop="mt-h8pr lg:mt-h26pr"
      >
        <center>
          <HeaderText
            noBold
            fontSize="text-4xl text-[#a26360]"
            className="mt-2pr mb-3pr"
          >
            Terms of Use
          </HeaderText>
        </center>
        <br />
        <p className="overflow-scroll">
          <p>
            <strong>Website Terms of Use</strong>
          </p>
          <br />

          <p>
            The following Terms of Use are entered into by and between You and
            Guardian Group (&ldquo;<strong>Company</strong>&rdquo;, &ldquo;
            <strong>we</strong>&rdquo;, or &ldquo;<strong>us</strong>
            &rdquo;).
          </p>
          <br />

          <p>
            The following terms and conditions, together with any documents they
            expressly incorporate by reference (collectively, these &ldquo;
            <strong>Terms of Use</strong>&rdquo;), govern your access to and use
            of guardiangroup.org, including any content, functionality and
            services offered on or through guardiangroup.org (the &ldquo;
            <strong>Website</strong>&rdquo;), whether as a guest or a registered
            user.
          </p>
          <br />

          <p>
            Please read the Terms of Use carefully before you start to use the
            Website.{" "}
            <strong>
              By using the Website or by clicking to accept or agree to the
              Terms of Use when this option is made available to you, you accept
              and agree to be bound and abide by these Terms of Use and our
              Privacy Policy, incorporated herein by reference.
            </strong>{" "}
            If you do not want to agree to these Terms of Use including the
            agreements incorporated by reference herein, you must not access or
            use the Website.
          </p>
          <br />

          <p>
            This Website is offered and available to users who are 18 years of
            age or older. By using this Website, you represent and warrant that
            you are of legal age to form a binding contract with the Company and
            meet all of the foregoing eligibility requirements. If you do not
            meet all of these requirements, you must not access or use the
            Website.
          </p>
          <br />

          <p>
            <strong>
              By using our Services, you represent and warrant that:
            </strong>
          </p>
          <br />
          <p>1. You are at least 18 years old;</p>
          <br />
          <p>
            2. You are legally qualified to enter a binding contract with
            Guardian Goup;
          </p>
          <br />
          <p>3. You are located in either the United States or Canada;</p>
          <br />
          <p>
            4. You have not have been convicted of or pled no contest to a
            felony or indictable offense (or crime of similar severity), a sex
            crime, or any crime involving violence;
          </p>
          <br />
          <p>
            5. You are not required to register as a sex offender with any
            state, federal or local sex offender registry;
          </p>
          <br />
          <p>6. You do not have more than one account on our Services; and</p>
          <br />
          <p>
            7. You have not previously been removed from our Services by us,
            unless you have our express written permission to create a new
            account.
          </p>
          <br />
          <p>
            <strong>&nbsp;</strong>
          </p>
          <br />
          <p>
            <strong>Changes To the Terms Of Use</strong>
          </p>
          <br />

          <p>
            We may revise and update these Terms of Use from time to time in our
            sole discretion. All changes are effective immediately when we post
            them, and apply to all access to and use of the Website thereafter.
            Your continued use of the Website following the posting of revised
            Terms of Use means that you accept and agree to the changes. You are
            expected to check this page from time to time so you are aware of
            any changes, as they are binding on you.
          </p>
          <br />

          <p>
            <strong>Privacy</strong>
          </p>
          <br />

          <p>
            Your use of the Website is also subject to the Company&rsquo;s
            Privacy Policy. Please review our Privacy Policy, which also governs
            the Website and informs users of our data collection practices. Your
            agreement to the Privacy Policy is hereby incorporated into these
            Terms of Use.
          </p>
          <br />

          <p>
            <strong>Disclaimer</strong>
          </p>
          <br />

          <p>
            Your use of the Website is also subject to the Company&rsquo;s
            Disclaimer. Please review our Disclaimer, which also governs the
            Website and informs users of various limitations regarding the
            information provided on the Website. Your agreement to the
            Disclaimer is hereby incorporated into these Terms of Use.
          </p>
          <br />

          <p>
            <strong>Accessing The Website And Account Security</strong>
          </p>
          <br />

          <p>
            We reserve the right to withdraw or amend this Website and any
            service or material we provide on the Website in our sole discretion
            without notice. We will not be liable if for any reason all or any
            part of the Website is unavailable at any time or for any period.
            From time to time, we may restrict access to some parts of the
            Website, or the entire Website, to users, including registered
            users.
          </p>
          <br />

          <p>
            To access the Website or some of the resources it offers, you may be
            asked to provide certain registration details or other information.
            It is a condition of your use of the Website and any resources
            downloaded from the Website that all the information you provide on
            the Website is correct, current, and complete. You agree that all
            information you provide to register with this Website or otherwise,
            including but not limited to through the use of any interactive
            features on the Website, is governed by our Privacy Policy, and you
            consent to all actions we take with respect to your information
            consistent with our Privacy Policy.
          </p>
          <br />

          <p>
            If you choose, or are provided with, a user name, password or any
            other piece of information as part of our security procedures, you
            must treat such information as confidential, and you must not
            disclose it to any other person or entity. You also acknowledge that
            your account is personal to you and agree not to provide any other
            person with access to this Website or portions of it using your user
            name, password or other security information. You agree to notify us
            immediately of any unauthorized access to or use of your user name
            or password or any other breach of security. You also agree to
            ensure that you exit from your account at the end of each session.
            You should use particular caution when accessing your account from a
            public or shared computer so that others are not able to view or
            record your password or other personal information.
          </p>
          <br />

          <p>
            We have the right to disable any user name, password or other
            identifier, whether chosen by you or provided by us, at any time in
            our sole discretion for any or no reason, including if, in our
            opinion, you have violated any provision of these Terms of Use.
          </p>
          <br />

          <p>
            <strong>
              No Unlawful Or Prohibited Use And Intellectual Property
            </strong>
          </p>
          <br />

          <p>
            You are granted a non-exclusive, non-transferable, revocable license
            to access and use the Website and the resources available for
            download from the Website strictly in accordance with these Terms of
            Use.
          </p>
          <br />

          <p>
            As a condition of your use of the Website, you warrant to the
            Company that you will not use the Website or any of the resources
            available for download from the Website for any purpose that is
            unlawful or prohibited by these Terms. You may not use the Website
            or any of the resources available for download from the Website in
            any manner that could damage, disable, overburden, or impair the
            Website or interfere with any other party&rsquo;s use and enjoyment
            of the Website. You may not obtain or attempt to obtain any
            materials or information through any means not intentionally made
            available or provided for through the Website.
          </p>
          <br />

          <p>
            All content included as part of the Service, such as text, graphics,
            logos, images, as well as the compilation thereof, and any software
            used on the Website, is the property of the Company or its suppliers
            and protected by copyright and other laws that protect intellectual
            property and proprietary rights. You agree to observe and abide by
            all copyright and other proprietary notices, legends or other
            restrictions contained in any such content and will not make any
            changes thereto.
          </p>
          <br />

          <p>
            You will not modify, publish, transmit, reverse engineer,
            participate in the transfer or sale, create derivative works, or in
            any way exploit any of the content, in whole or in part, found on
            the Website or any of the resources available for download from the
            Website.
          </p>
          <br />

          <p>
            The Company content is not for resale. Your use of the Website or
            any of the resources available for download from the Website does
            not entitle you to make any unauthorized use of any protected
            content, and in particular you will not delete or alter any
            proprietary rights or attribution notices in any content. You will
            use protected content solely for your individual use, and will make
            no other use of the content without the express written permission
            of the Company and the copyright owner. You agree that you do not
            acquire any ownership rights in any protected content. We do not
            grant you any licenses, express or implied, to the intellectual
            property of the Company or our licensors except as expressly
            authorized by these Terms.
          </p>
          <br />

          <p>
            The Company name, the Company logo, the Company slogan, and all
            related names, logos, product and service names, designs, and
            slogans are trademarks of the Company or its affiliates or
            licensors. You must not use such marks without the prior written
            permission of the Company. All other names, logos, product and
            service names, designs and slogans on this Website are the
            trademarks of their respective owners.
          </p>
          <br />

          <p>
            <strong>For Educational And Informational Purposes Only</strong>
          </p>
          <br />

          <p>
            As set forth more fully in the Disclaimer, the information contained
            on this Website and the resources available for download through
            this Website are for educational and informational purposes only.
            The information contained on this Website and the resources
            available for download through this Website is not intended as, and
            shall not be understood or construed as legal, financial, tax,
            medical, health, or any other professional advice.
          </p>
          <br />

          <p>
            <strong>Accuracy And Personal Responsibility</strong>
          </p>
          <br />

          <p>
            As set forth more fully in the Disclaimer, we have done our best to
            ensure that the information provided on this Website and the
            resources available for download are accurate and provide valuable
            information, but we cannot guarantee the accuracy of the
            information. Neither the Company nor any of its owners or employees
            shall be held liable or responsible for any errors or omissions on
            this Website or for any damage you may suffer as a result of failing
            to seek competent advice from a professional who is familiar with
            your situation.
          </p>
          <br />

          <p>
            By using this Website, you accept personal responsibility for the
            results of your actions. You agree to take full responsibility for
            any harm or damage you suffer as a result of the use, or non-use, of
            the information available on this Website or the resources available
            for download from this Website. You agree to use judgment and
            conduct due diligence before taking any actions or implementing any
            plans or policy suggested or recommended on this Website.
          </p>
          <br />

          <p>
            <strong>No Guarantees As To Results</strong>
          </p>
          <br />

          <p>
            As set forth more fully in the Disclaimer, you agree that the
            Company has not made any guarantees about the results of taking any
            action, whether recommended on this Website or not. The Company
            provides educational and informational resources that are intended
            to help users of this Website succeed. You nevertheless recognize
            that your ultimate success or failure will be the result of your own
            efforts, your particular situation, and innumerable other
            circumstances beyond the control and/or knowledge of the Company.
          </p>
          <br />

          <p>
            You also recognize that prior results do not guarantee a similar
            outcome. Thus, the results obtained by others &ndash; whether
            clients of the Company or otherwise &ndash; applying the principles
            set out in this Website are no guarantee that you or any other
            person or entity will be able to obtain similar results.
          </p>
          <br />

          <p>
            <strong>Email And Other Electronic Communications</strong>
          </p>
          <br />

          <p>
            Visiting the Website or sending emails to the Company constitutes
            electronic communications. You consent to receive electronic
            communications and you agree that all agreements, notices,
            disclosures, and other communications that we provide to you
            electronically, via email and on the Website, satisfy any legal
            requirement that such communications be in writing.
          </p>
          <br />

          <p>
            We would be pleased to communicate with you by e-mail, and there are
            various places on this Website that provide you the ability to send
            an electronic communication to the Company. Any such email or other
            electronic communication, however, does not create a business
            relationship or any contractual relationship. As set forth more
            fully in our Privacy Policy, we will take reasonable steps to ensure
            that any communications remain confidential, but we cannot guarantee
            the security of such communications and cannot guarantee that we
            would not be required to disclose such communications as a result of
            a court order.
          </p>
          <br />

          <p>
            <strong>Use Of Communication Services</strong>
          </p>
          <br />

          <p>
            The Website may contain bulletin board services, chat areas, news
            groups, forums, communities, personal web pages, calendars, blog
            comment sections and/or other message or communication facilities
            designed to enable you to communicate with the public at large or
            with a group (collectively, &ldquo;
            <strong>Communication Services</strong>&rdquo;), you agree to use
            the Communication Services only to post, send and receive messages
            and material that are proper and related to the particular
            Communication Service.
          </p>
          <br />

          <p>
            By way of example, and not as a limitation, you agree that when
            using a Communication Service, you will not: defame, abuse, harass,
            stalk, threaten or otherwise violate the legal rights (such as
            rights of privacy and publicity) of others; publish, post, upload,
            distribute or disseminate any inappropriate, profane, defamatory,
            infringing, obscene, indecent or unlawful topic, name, material or
            information; upload files that contain software or other material
            protected by intellectual property laws (or by rights of privacy of
            publicity) unless you own or control the rights thereto or have
            received all necessary consents; upload files that contain viruses,
            corrupted files, or any other similar software or programs that may
            damage the operation of another&rsquo;s computer; advertise or offer
            to sell or buy any goods or services for any business purpose,
            unless such Communication Service specifically allows such messages;
            conduct or forward surveys, contests, pyramid schemes or chain
            letters; download any file posted by another user of a Communication
            Service that you know, or reasonably should know, cannot be legally
            distributed in such manner; falsify or delete any author
            attributions, legal or other proper notices or proprietary
            designations or labels of the origin or source of software or other
            material contained in a file that is uploaded, restrict or inhibit
            any other user from using and enjoying the Communication Services;
            violate any code of conduct or other guidelines which may be
            applicable for any particular Communication Service; harvest or
            otherwise collect information about others, including e-mail
            addresses, without their consent; violate any applicable laws or
            regulations.
          </p>
          <br />

          <p>
            The Company has no obligation to monitor the Communication Services.
            However, the Company reserves the right to review materials posted
            to a Communication Service and to remove any materials in its sole
            discretion. The Company reserves the right to terminate your access
            to any or all of the Communication Services at any time without
            notice for any reason whatsoever.
          </p>
          <br />

          <p>
            The Company reserves the right at all times to disclose any
            information as necessary to satisfy any applicable law, regulation,
            legal process or governmental request, or to edit, refuse to post or
            to remove any information or materials, in whole or in part, in the
            Company&rsquo;s sole discretion.
          </p>
          <br />

          <p>
            Always use caution when giving out any personally identifying
            information about yourself in any Communication Service. The Company
            does not control or endorse the content, messages or information
            found in any Communication Service and, therefore, the Company
            specifically disclaims any liability with regard to the
            Communication Services and any actions resulting from your
            participation in any Communication Service. Managers and hosts are
            not authorized the Company spokespersons, and their views do not
            necessarily reflect those of the Company.
          </p>
          <br />

          <p>
            Materials uploaded to a Communication Service may be subject to
            posted limitations on usage, reproduction and/or dissemination. You
            are responsible for adhering to such limitations if you upload the
            materials.
          </p>
          <br />

          <p>
            <strong>Materials Provided To The Website</strong>
          </p>
          <br />

          <p>
            The Company does not claim ownership of the materials you provide to
            the Website (including feedback and suggestions) or post, upload,
            input or submit to any Website or our associated services
            (collectively &ldquo;<strong>Submissions</strong>
            &rdquo;). However, by posting, uploading, inputting, providing, or
            submitting your Submission you are granting the Company, our
            affiliated companies, and necessary sub-licensees permission to use
            your Submission in connection with the operation of their Internet
            businesses including, without limitation, the rights to: copy,
            distribute, transmit, publicly display, publicly perform, reproduce,
            edit, translate, and reformat your Submission; and to publish your
            name in connection with your Submission.
          </p>
          <br />

          <p>
            No compensation will be paid with respect to the use of your
            Submission, as provided herein. The Company is under no obligation
            to post or use any Submission you may provide and may remove any
            Submission at any time in the Company&rsquo;s sole discretion.
          </p>
          <br />

          <p>
            By posting, uploading, inputting, providing, or submitting your
            Submission you warrant and represent that you own or otherwise
            control all of the rights to your Submission as described in this
            section including, without limitation, all the rights necessary for
            you to provide, post, upload, input or submit the Submissions.
          </p>
          <br />

          <p>
            <strong>Links To Third Party Websites And Services</strong>
          </p>
          <br />

          <p>
            The Website may contain links to other Websites (&ldquo;
            <strong>Linked Websites</strong>&rdquo;). The Linked Websites are
            not under the control of the Company and the Company is not
            responsible for the contents of any Linked Website, including
            without limitation any link contained in a Linked Website, or any
            changes or updates to a Linked Website. The Company is providing
            these links to you only as a convenience, and the inclusion of any
            link does not imply endorsement by the Company of the Website or any
            association with its operators.
          </p>
          <br />

          <p>
            Certain services made available via the Website are delivered by
            third-party Websites and organizations. By using any product,
            service, or functionality originating from the Website, you hereby
            acknowledge and consent that the Company may share such information
            and data with any third party with whom the Company has a
            contractual relationship to provide the requested product, service
            or functionality on behalf of the Website&rsquo;s users and
            customers.
          </p>
          <br />

          <p>
            <strong>Use Of Templates And Forms</strong>
          </p>
          <br />

          <p>
            The Company provides various templates and/or forms for download
            and/or sale on this Website. The Company grants you a limited,
            personal, non-exclusive, non-transferable license to use our
            templates and/or forms for your own personal or internal business
            use. Except as otherwise provided, you acknowledge and agree that
            you have no right to modify, edit, copy, reproduce, create
            derivative works of, reverse engineer, alter, enhance or in any way
            exploit any of the templates and/or forms in any manner, except for
            modifications in filling out the templates and/or forms for your
            authorized use.
          </p>
          <br />

          <p>
            By ordering or downloading Forms, you agree that the Forms you
            purchase or download may only be used by you for your personal or
            business use and may not be sold or redistributed without the
            express written consent of the Company.
          </p>
          <br />

          <p>
            <strong>
              Use of Paid Courses, Programs, and Associated Material
            </strong>
          </p>
          <br />

          <p>
            The Company from time-to-time provides various courses, programs,
            and associated material for sale on this Website. The Company grants
            you a limited, personal, non-exclusive, non-transferable license to
            use our courses, programs, and associated material (collectively the
            &ldquo;
            <strong>Courses</strong>&rdquo;) for your own personal or internal
            business use. Except as otherwise provided, you acknowledge and
            agree that you have no right to modify, edit, copy, reproduce,
            create derivative works of, reverse engineer, alter, enhance or in
            any way exploit any of the Courses in any manner.
          </p>
          <br />

          <p>
            By ordering or participating in Courses, you agree that the Courses
            you purchase or download may only be used by you for your personal
            or business use and may not be sold or redistributed without the
            express written consent of the Company.
          </p>
          <br />

          <p>
            By ordering or participating in Courses, you further agree that you
            shall not create any derivative work based upon the Courses and you
            shall not offer any competing products or services based upon any
            information contained in the Courses.
          </p>
          <br />

          <p>
            <strong>Use Of Free Downloadable Content</strong>
          </p>
          <br />

          <p>
            The Company provides various resources on this Website, which users
            may access by providing an e-mail address. The Company grants you a
            limited, personal, non-exclusive, non-transferable license to use
            our resources provided in exchange for an email address (the &ldquo;
            <strong>Freemium Content</strong>&rdquo;) for your own personal or
            internal business use. Except as otherwise provided, you acknowledge
            and agree that you have no right to modify, edit, copy, reproduce,
            create derivative works of, reverse engineer, alter, enhance or in
            any way exploit any of the Freemium Content in any manner.
          </p>
          <br />

          <p>
            By downloading the Freemium Content, you agree that the Fremium
            Content you download may only be used by you for your personal or
            business use and may not be sold or redistributed without the
            express written consent of the Company.
          </p>
          <br />

          <p>
            By downloading the Freemium Content, you further agree that you
            shall not create any derivative work based upon the Freemium Content
            and you shall not offer any competing products or services based
            upon any information contained in the Freemium Content.
          </p>
          <br />

          <p>
            <strong>Guests</strong>
          </p>
          <br />

          <p>
            The Company may, from time to time, provide information from a third
            party in the form of a podcast guest interview, interview on other
            platform, guest blog post, or other medium. The Company does not
            control the information provided by such third-party guests, is not
            responsible for investigating the truth of any information provided,
            and cannot guarantee the veracity of any statements made by such
            guests.
          </p>
          <br />

          <p>
            Individuals who agree to appear as guests on any podcast offered by
            the Company agree to transfer all intellectual property rights they
            may have in any such interviews to the Company and further provide a
            license to any rights they are unable to assign.
          </p>
          <br />

          <p>
            <strong>Cancellation Of Subscription</strong>
          </p>
          <br />

          <p>
            Certain of the Company&rsquo;s products and services are offered on
            an ongoing basis with a monthly or yearly subscription. Users may
            cancel subscriptions at any time by emailing
            contact@guardiangroup.org.
          </p>
          <br />

          <p>
            Your subscription shall be terminated immediately upon cancellation,
            and you shall not receive any refund. You shall not be charged after
            a cancellation.
          </p>
          <br />

          <p>
            <strong>No Warranties</strong>
          </p>
          <br />

          <p>
            THE COMPANY MAKES NO WARRANTIES REGARDING THE PERFORMANCE OR
            OPERATION OF THIS WEBSITE. THE COMPANY FURTHER MAKES NO
            REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO
            THE INFORMATION, CONTENTS, MATERIALS, DOCUMENTS, PROGRAMS, PRODUCTS,
            BOOKS, OR SERVICES INCLUDED ON OR THROUGH THIS WEBSITE. TO THE
            FULLEST EXTENT PERMISSIBLE UNDER THE LAW, THE COMPANY DISCLAIMS ALL
            WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF
            MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
          </p>
          <br />

          <p>
            <strong>Limitation of Liability</strong>
          </p>
          <br />

          <p>
            YOU AGREE TO ABSOLVE THE COMPANY OF ANY AND ALL LIABILITY OR LOSS
            THAT YOU OR ANY PERSON OR ENTITY ASSOCIATED WITH YOU MAY SUFFER OR
            INCUR AS A RESULT OF USE OF THE INFORMATION CONTAINED ON THIS
            WEBSITE AND/OR THE RESOURCES YOU MAY DOWNLOAD FROM THIS WEBSITE. YOU
            AGREE THAT THE COMPANY SHALL NOT BE LIABLE TO YOU FOR ANY TYPE OF
            DAMAGES, INCLUDING DIRECT, INDIRECT, SPECIAL, INCIDENTAL, EQUITABLE,
            OR CONSEQUENTIAL LOSS OR DAMAGES FOR USE OF THIS WEBSITE.
          </p>
          <br />

          <p>
            THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
            AVAILABLE THROUGH THE WEBSITE MAY INCLUDE INACCURACIES OR
            TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE
            INFORMATION HEREIN. THE COMPANY AND/OR ITS SUPPLIERS MAY MAKE
            IMPROVEMENTS AND/OR CHANGES IN THE WEBSITE AT ANY TIME.
          </p>
          <br />

          <p>
            THE COMPANY AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE
            SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF
            THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS
            CONTAINED ON THE WEBSITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT
            PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE,
            PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED &ldquo;AS
            IS&rdquo; WITHOUT WARRANTY OR CONDITION OF ANY KIND. THE COMPANY
            AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS
            WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND
            RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
            NON-INFRINGEMENT.
          </p>
          <br />

          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
            THE COMPANY AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT,
            PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES
            WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE,
            DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE
            OR PERFORMANCE OF THE WEBSITE, WITH THE DELAY OR INABILITY TO USE
            THE WEBSITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO
            PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS,
            SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE WEBSITE, OR
            OTHERWISE ARISING OUT OF THE USE OF THE WEBSITE, WHETHER BASED ON
            CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF
            THE COMPANY OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE
            POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT
            ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR
            INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF
            YOU ARE DISSATISFIED WITH ANY PORTION OF THE WEBSITE, OR WITH ANY OF
            THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE
            USING THE WEBSITE.
          </p>
          <br />

          <p>
            <strong>Arbitration</strong>
          </p>
          <br />

          <p>
            You hereby expressly waive any and all claims you may have, now or
            in the future, arising out of or relating to this Website, the
            Company, any and all contracts you enter into with the Company, and
            any and all of the Company&rsquo;s products and services.
          </p>
          <br />

          <p>
            To the extent that you attempt to assert any such claim, you hereby
            expressly agree to present such claim only through binding
            arbitration to occur in Bend, OR. You further agree to and do hereby
            waive any right to class arbitration and agree, instead, to conduct
            an arbitration related solely to any individual claims you and/or
            any entity related to you asserts against the Company. To the
            fullest extent permissible by law, you further agree that you shall
            be responsible for all costs associated with initiating the
            arbitration and for the administration of the arbitration.
          </p>
          <br />
          <p>
            <strong>No Joint Venture Or Other Relationship</strong>
          </p>
          <br />

          <p>
            You agree that no joint venture, partnership, employment, or agency
            relationship exists between you and the Company as a result of this
            agreement or use of the Website. The Company&rsquo;s performance of
            this agreement is subject to existing laws and legal process, and
            nothing contained in this agreement is in derogation of the
            Company&rsquo;s right to comply with governmental, court, and law
            enforcement requests or requirements relating to your use of the
            Website or information provided to or gathered by the Company with
            respect to such use. If any part of this agreement is determined to
            be invalid or unenforceable pursuant to applicable law including,
            but not limited to, the warranty disclaimers and liability
            limitations set forth above, then the invalid or unenforceable
            provision will be deemed superseded by a valid, enforceable
            provision that most closely matches the intent of the original
            provision and the remainder of the agreement shall continue in
            effect.
          </p>
          <br />

          <p>
            <strong>Entire Agreement</strong>
          </p>
          <br />

          <p>
            Unless otherwise specified herein, this agreement, along with the
            Privacy Policy and Disclaimer, constitutes the entire agreement
            between the user and the Company with respect to the Website and it
            supersedes all prior or contemporaneous communications and
            proposals, whether electronic, oral or written, between the user and
            the Company with respect to the Website. A printed version of this
            agreement and of any notice given in electronic form shall be
            admissible in judicial or administrative proceedings based upon or
            relating to this agreement to the same extent and subject to the
            same conditions as other business documents and records originally
            generated and maintained in printed form. It is the express wish to
            the parties that this agreement and all related documents be written
            in English.
          </p>
          <br />

          <p>
            <strong>Changes to Terms</strong>
          </p>
          <br />

          <p>
            The Company reserves the right, in its sole discretion, to change
            the Terms under which the Website is offered. The most current
            version of the Terms will supersede all previous versions. The
            Company encourages you to periodically review the Terms to stay
            informed of our updates.
          </p>
          <br />

          <p>
            <strong>Contact Us</strong>
          </p>
          <br />

          <p>
            The Company welcomes your questions or comments regarding the Terms:
          </p>
          <br />

          <p>Guardian Group</p>
          <br />
          <p>Email Address: pga@guardiangroup.org</p>
          <br />

          <p>Effective as of 09July2019</p>
          <br />

          <p>
            Please read the Terms of Use carefully before you start to use the
            Website.{" "}
            <strong>
              By using the Website or by clicking to accept or agree to the
              Terms of Use when this option is made available to you, you accept
              and agree to be bound and abide by these Terms of Use and our
              Privacy Policy, incorporated herein by reference.
            </strong>{" "}
            If you do not want to agree to these Terms of Use including the
            agreements incorporated by reference herein, you must not access or
            use the Website.
          </p>
          <br />

          <p>
            This Website is offered and available to users who are 18 years of
            age or older. By using this Website, you represent and warrant that
            you are of legal age to form a binding contract with the Company and
            meet all of the foregoing eligibility requirements. If you do not
            meet all of these requirements, you must not access or use the
            Website.
          </p>
          <br />

          <p>
            <strong>Changes To the Terms Of Use</strong>
          </p>
          <br />

          <p>
            We may revise and update these Terms of Use from time to time in our
            sole discretion. All changes are effective immediately when we post
            them, and apply to all access to and use of the Website thereafter.
            Your continued use of the Website following the posting of revised
            Terms of Use means that you accept and agree to the changes. You are
            expected to check this page from time to time so you are aware of
            any changes, as they are binding on you.
          </p>
          <br />

          <p>
            <strong>Privacy</strong>
          </p>
          <br />

          <p>
            Your use of the Website is also subject to the Company&rsquo;s
            Privacy Policy. Please review our Privacy Policy, which also governs
            the Website and informs users of our data collection practices. Your
            agreement to the Privacy Policy is hereby incorporated into these
            Terms of Use.
          </p>
          <br />

          <p>
            <strong>Disclaimer</strong>
          </p>
          <br />

          <p>
            Your use of the Website is also subject to the Company&rsquo;s
            Disclaimer. Please review our Disclaimer, which also governs the
            Website and informs users of various limitations regarding the
            information provided on the Website. Your agreement to the
            Disclaimer is hereby incorporated into these Terms of Use.
          </p>
          <br />

          <p>
            <strong>Accessing The Website And Account Security</strong>
          </p>
          <br />

          <p>
            We reserve the right to withdraw or amend this Website and any
            service or material we provide on the Website in our sole discretion
            without notice. We will not be liable if for any reason all or any
            part of the Website is unavailable at any time or for any period.
            From time to time, we may restrict access to some parts of the
            Website, or the entire Website, to users, including registered
            users.
          </p>
          <br />

          <p>
            To access the Website or some of the resources it offers, you may be
            asked to provide certain registration details or other information.
            It is a condition of your use of the Website and any resources
            downloaded from the Website that all the information you provide on
            the Website is correct, current, and complete. You agree that all
            information you provide to register with this Website or otherwise,
            including but not limited to through the use of any interactive
            features on the Website, is governed by our Privacy Policy, and you
            consent to all actions we take with respect to your information
            consistent with our Privacy Policy.
          </p>
          <br />

          <p>
            If you choose, or are provided with, a user name, password or any
            other piece of information as part of our security procedures, you
            must treat such information as confidential, and you must not
            disclose it to any other person or entity. You also acknowledge that
            your account is personal to you and agree not to provide any other
            person with access to this Website or portions of it using your user
            name, password or other security information. You agree to notify us
            immediately of any unauthorized access to or use of your user name
            or password or any other breach of security. You also agree to
            ensure that you exit from your account at the end of each session.
            You should use particular caution when accessing your account from a
            public or shared computer so that others are not able to view or
            record your password or other personal information.
          </p>
          <br />

          <p>
            We have the right to disable any user name, password or other
            identifier, whether chosen by you or provided by us, at any time in
            our sole discretion for any or no reason, including if, in our
            opinion, you have violated any provision of these Terms of Use.
          </p>
          <br />

          <p>
            <strong>
              No Unlawful Or Prohibited Use And Intellectual Property
            </strong>
          </p>
          <br />

          <p>
            You are granted a non-exclusive, non-transferable, revocable license
            to access and use the Website and the resources available for
            download from the Website strictly in accordance with these Terms of
            Use.
          </p>
          <br />

          <p>
            As a condition of your use of the Website, you warrant to the
            Company that you will not use the Website or any of the resources
            available for download from the Website for any purpose that is
            unlawful or prohibited by these Terms. You may not use the Website
            or any of the resources available for download from the Website in
            any manner that could damage, disable, overburden, or impair the
            Website or interfere with any other party&rsquo;s use and enjoyment
            of the Website. You may not obtain or attempt to obtain any
            materials or information through any means not intentionally made
            available or provided for through the Website.
          </p>
          <br />

          <p>
            All content included as part of the Service, such as text, graphics,
            logos, images, as well as the compilation thereof, and any software
            used on the Website, is the property of the Company or its suppliers
            and protected by copyright and other laws that protect intellectual
            property and proprietary rights. You agree to observe and abide by
            all copyright and other proprietary notices, legends or other
            restrictions contained in any such content and will not make any
            changes thereto.
          </p>
          <br />

          <p>
            You will not modify, publish, transmit, reverse engineer,
            participate in the transfer or sale, create derivative works, or in
            any way exploit any of the content, in whole or in part, found on
            the Website or any of the resources available for download from the
            Website.
          </p>
          <br />

          <p>
            The Company content is not for resale. Your use of the Website or
            any of the resources available for download from the Website does
            not entitle you to make any unauthorized use of any protected
            content, and in particular you will not delete or alter any
            proprietary rights or attribution notices in any content. You will
            use protected content solely for your individual use, and will make
            no other use of the content without the express written permission
            of the Company and the copyright owner. You agree that you do not
            acquire any ownership rights in any protected content. We do not
            grant you any licenses, express or implied, to the intellectual
            property of the Company or our licensors except as expressly
            authorized by these Terms.
          </p>
          <br />

          <p>
            The Company name, the Company logo, the Company slogan, and all
            related names, logos, product and service names, designs, and
            slogans are trademarks of the Company or its affiliates or
            licensors. You must not use such marks without the prior written
            permission of the Company. All other names, logos, product and
            service names, designs and slogans on this Website are the
            trademarks of their respective owners.
          </p>
          <br />

          <p>
            <strong>For Educational And Informational Purposes Only</strong>
          </p>
          <br />

          <p>
            As set forth more fully in the Disclaimer, the information contained
            on this Website and the resources available for download through
            this Website are for educational and informational purposes only.
            The information contained on this Website and the resources
            available for download through this Website is not intended as, and
            shall not be understood or construed as legal, financial, tax,
            medical, health, or any other professional advice.
          </p>
          <br />

          <p>
            <strong>Accuracy And Personal Responsibility</strong>
          </p>
          <br />

          <p>
            As set forth more fully in the Disclaimer, we have done our best to
            ensure that the information provided on this Website and the
            resources available for download are accurate and provide valuable
            information, but we cannot guarantee the accuracy of the
            information. Neither the Company nor any of its owners or employees
            shall be held liable or responsible for any errors or omissions on
            this Website or for any damage you may suffer as a result of failing
            to seek competent advice from a professional who is familiar with
            your situation.
          </p>
          <br />

          <p>
            By using this Website, you accept personal responsibility for the
            results of your actions. You agree to take full responsibility for
            any harm or damage you suffer as a result of the use, or non-use, of
            the information available on this Website or the resources available
            for download from this Website. You agree to use judgment and
            conduct due diligence before taking any actions or implementing any
            plans or policy suggested or recommended on this Website.
          </p>
          <br />

          <p>
            <strong>No Guarantees As To Results</strong>
          </p>
          <br />

          <p>
            As set forth more fully in the Disclaimer, you agree that the
            Company has not made any guarantees about the results of taking any
            action, whether recommended on this Website or not. The Company
            provides educational and informational resources that are intended
            to help users of this Website succeed. You nevertheless recognize
            that your ultimate success or failure will be the result of your own
            efforts, your particular situation, and innumerable other
            circumstances beyond the control and/or knowledge of the Company.
          </p>
          <br />

          <p>
            You also recognize that prior results do not guarantee a similar
            outcome. Thus, the results obtained by others &ndash; whether
            clients of the Company or otherwise &ndash; applying the principles
            set out in this Website are no guarantee that you or any other
            person or entity will be able to obtain similar results.
          </p>
          <br />

          <p>
            <strong>Email And Other Electronic Communications</strong>
          </p>
          <br />

          <p>
            Visiting the Website or sending emails to the Company constitutes
            electronic communications. You consent to receive electronic
            communications and you agree that all agreements, notices,
            disclosures, and other communications that we provide to you
            electronically, via email and on the Website, satisfy any legal
            requirement that such communications be in writing.
          </p>
          <br />

          <p>
            We would be pleased to communicate with you by e-mail, and there are
            various places on this Website that provide you the ability to send
            an electronic communication to the Company. Any such email or other
            electronic communication, however, does not create a business
            relationship or any contractual relationship. As set forth more
            fully in our Privacy Policy, we will take reasonable steps to ensure
            that any communications remain confidential, but we cannot guarantee
            the security of such communications and cannot guarantee that we
            would not be required to disclose such communications as a result of
            a court order.
          </p>
          <br />

          <p>
            <strong>Use Of Communication Services</strong>
          </p>
          <br />

          <p>
            The Website may contain bulletin board services, chat areas, news
            groups, forums, communities, personal web pages, calendars, blog
            comment sections and/or other message or communication facilities
            designed to enable you to communicate with the public at large or
            with a group (collectively, &ldquo;
            <strong>Communication Services</strong>&rdquo;), you agree to use
            the Communication Services only to post, send and receive messages
            and material that are proper and related to the particular
            Communication Service.
          </p>
          <br />

          <p>
            By way of example, and not as a limitation, you agree that when
            using a Communication Service, you will not: defame, abuse, harass,
            stalk, threaten or otherwise violate the legal rights (such as
            rights of privacy and publicity) of others; publish, post, upload,
            distribute or disseminate any inappropriate, profane, defamatory,
            infringing, obscene, indecent or unlawful topic, name, material or
            information; upload files that contain software or other material
            protected by intellectual property laws (or by rights of privacy of
            publicity) unless you own or control the rights thereto or have
            received all necessary consents; upload files that contain viruses,
            corrupted files, or any other similar software or programs that may
            damage the operation of another&rsquo;s computer; advertise or offer
            to sell or buy any goods or services for any business purpose,
            unless such Communication Service specifically allows such messages;
            conduct or forward surveys, contests, pyramid schemes or chain
            letters; download any file posted by another user of a Communication
            Service that you know, or reasonably should know, cannot be legally
            distributed in such manner; falsify or delete any author
            attributions, legal or other proper notices or proprietary
            designations or labels of the origin or source of software or other
            material contained in a file that is uploaded, restrict or inhibit
            any other user from using and enjoying the Communication Services;
            violate any code of conduct or other guidelines which may be
            applicable for any particular Communication Service; harvest or
            otherwise collect information about others, including e-mail
            addresses, without their consent; violate any applicable laws or
            regulations.
          </p>
          <br />

          <p>
            The Company has no obligation to monitor the Communication Services.
            However, the Company reserves the right to review materials posted
            to a Communication Service and to remove any materials in its sole
            discretion. The Company reserves the right to terminate your access
            to any or all of the Communication Services at any time without
            notice for any reason whatsoever.
          </p>
          <br />

          <p>
            The Company reserves the right at all times to disclose any
            information as necessary to satisfy any applicable law, regulation,
            legal process or governmental request, or to edit, refuse to post or
            to remove any information or materials, in whole or in part, in the
            Company&rsquo;s sole discretion.
          </p>
          <br />

          <p>
            Always use caution when giving out any personally identifying
            information about yourself in any Communication Service. The Company
            does not control or endorse the content, messages or information
            found in any Communication Service and, therefore, the Company
            specifically disclaims any liability with regard to the
            Communication Services and any actions resulting from your
            participation in any Communication Service. Managers and hosts are
            not authorized the Company spokespersons, and their views do not
            necessarily reflect those of the Company.
          </p>
          <br />

          <p>
            Materials uploaded to a Communication Service may be subject to
            posted limitations on usage, reproduction and/or dissemination. You
            are responsible for adhering to such limitations if you upload the
            materials.
          </p>
          <br />

          <p>
            <strong>Materials Provided To The Website</strong>
          </p>
          <br />

          <p>
            The Company does not claim ownership of the materials you provide to
            the Website (including feedback and suggestions) or post, upload,
            input or submit to any Website or our associated services
            (collectively &ldquo;<strong>Submissions</strong>
            &rdquo;). However, by posting, uploading, inputting, providing, or
            submitting your Submission you are granting the Company, our
            affiliated companies, and necessary sub-licensees permission to use
            your Submission in connection with the operation of their Internet
            businesses including, without limitation, the rights to: copy,
            distribute, transmit, publicly display, publicly perform, reproduce,
            edit, translate, and reformat your Submission; and to publish your
            name in connection with your Submission.
          </p>
          <br />

          <p>
            No compensation will be paid with respect to the use of your
            Submission, as provided herein. The Company is under no obligation
            to post or use any Submission you may provide and may remove any
            Submission at any time in the Company&rsquo;s sole discretion.
          </p>
          <br />

          <p>
            By posting, uploading, inputting, providing, or submitting your
            Submission you warrant and represent that you own or otherwise
            control all of the rights to your Submission as described in this
            section including, without limitation, all the rights necessary for
            you to provide, post, upload, input or submit the Submissions.
          </p>
          <br />

          <p>
            <strong>Links To Third Party Websites And Services</strong>
          </p>
          <br />

          <p>
            The Website may contain links to other Websites (&ldquo;
            <strong>Linked Websites</strong>&rdquo;). The Linked Websites are
            not under the control of the Company and the Company is not
            responsible for the contents of any Linked Website, including
            without limitation any link contained in a Linked Website, or any
            changes or updates to a Linked Website. The Company is providing
            these links to you only as a convenience, and the inclusion of any
            link does not imply endorsement by the Company of the Website or any
            association with its operators.
          </p>
          <br />

          <p>
            Certain services made available via the Website are delivered by
            third-party Websites and organizations. By using any product,
            service, or functionality originating from the Website, you hereby
            acknowledge and consent that the Company may share such information
            and data with any third party with whom the Company has a
            contractual relationship to provide the requested product, service
            or functionality on behalf of the Website&rsquo;s users and
            customers.
          </p>
          <br />

          <p>
            <strong>Use Of Templates And Forms</strong>
          </p>
          <br />

          <p>
            The Company provides various templates and/or forms for download
            and/or sale on this Website. The Company grants you a limited,
            personal, non-exclusive, non-transferable license to use our
            templates and/or forms for your own personal or internal business
            use. Except as otherwise provided, you acknowledge and agree that
            you have no right to modify, edit, copy, reproduce, create
            derivative works of, reverse engineer, alter, enhance or in any way
            exploit any of the templates and/or forms in any manner, except for
            modifications in filling out the templates and/or forms for your
            authorized use.
          </p>
          <br />

          <p>
            By ordering or downloading Forms, you agree that the Forms you
            purchase or download may only be used by you for your personal or
            business use and may not be sold or redistributed without the
            express written consent of the Company.
          </p>
          <br />

          <p>
            <strong>
              Use of Paid Courses, Programs, and Associated Material
            </strong>
          </p>
          <br />

          <p>
            The Company from time-to-time provides various courses, programs,
            and associated material for sale on this Website. The Company grants
            you a limited, personal, non-exclusive, non-transferable license to
            use our courses, programs, and associated material (collectively the
            &ldquo;
            <strong>Courses</strong>&rdquo;) for your own personal or internal
            business use. Except as otherwise provided, you acknowledge and
            agree that you have no right to modify, edit, copy, reproduce,
            create derivative works of, reverse engineer, alter, enhance or in
            any way exploit any of the Courses in any manner.
          </p>
          <br />

          <p>
            By ordering or participating in Courses, you agree that the Courses
            you purchase or download may only be used by you for your personal
            or business use and may not be sold or redistributed without the
            express written consent of the Company.
          </p>
          <br />

          <p>
            By ordering or participating in Courses, you further agree that you
            shall not create any derivative work based upon the Courses and you
            shall not offer any competing products or services based upon any
            information contained in the Courses.
          </p>
          <br />

          <p>
            <strong>Use Of Free Downloadable Content</strong>
          </p>
          <br />

          <p>
            The Company provides various resources on this Website, which users
            may access by providing an e-mail address. The Company grants you a
            limited, personal, non-exclusive, non-transferable license to use
            our resources provided in exchange for an email address (the &ldquo;
            <strong>Freemium Content</strong>&rdquo;) for your own personal or
            internal business use. Except as otherwise provided, you acknowledge
            and agree that you have no right to modify, edit, copy, reproduce,
            create derivative works of, reverse engineer, alter, enhance or in
            any way exploit any of the Freemium Content in any manner.
          </p>
          <br />

          <p>
            By downloading the Freemium Content, you agree that the Fremium
            Content you download may only be used by you for your personal or
            business use and may not be sold or redistributed without the
            express written consent of the Company.
          </p>
          <br />

          <p>
            By downloading the Freemium Content, you further agree that you
            shall not create any derivative work based upon the Freemium Content
            and you shall not offer any competing products or services based
            upon any information contained in the Freemium Content.
          </p>
          <br />

          <p>
            <strong>Guests</strong>
          </p>
          <br />

          <p>
            The Company may, from time to time, provide information from a third
            party in the form of a podcast guest interview, interview on other
            platform, guest blog post, or other medium. The Company does not
            control the information provided by such third-party guests, is not
            responsible for investigating the truth of any information provided,
            and cannot guarantee the veracity of any statements made by such
            guests.
          </p>
          <br />

          <p>
            Individuals who agree to appear as guests on any podcast offered by
            the Company agree to transfer all intellectual property rights they
            may have in any such interviews to the Company and further provide a
            license to any rights they are unable to assign.
          </p>
          <br />

          <p>
            <strong>Cancellation Of Subscription</strong>
          </p>
          <br />

          <p>
            Certain of the Company&rsquo;s products and services are offered on
            an ongoing basis with a monthly or yearly subscription. Users may
            cancel subscriptions at any time by emailing
            contact@guardiangroup.org.
          </p>
          <br />

          <p>
            Your subscription shall be terminated immediately upon cancellation,
            and you shall not receive any refund. You shall not be charged after
            a cancellation.
          </p>
          <br />

          <p>
            <strong>No Warranties</strong>
          </p>
          <br />

          <p>
            THE COMPANY MAKES NO WARRANTIES REGARDING THE PERFORMANCE OR
            OPERATION OF THIS WEBSITE. THE COMPANY FURTHER MAKES NO
            REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO
            THE INFORMATION, CONTENTS, MATERIALS, DOCUMENTS, PROGRAMS, PRODUCTS,
            BOOKS, OR SERVICES INCLUDED ON OR THROUGH THIS WEBSITE. TO THE
            FULLEST EXTENT PERMISSIBLE UNDER THE LAW, THE COMPANY DISCLAIMS ALL
            WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF
            MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
          </p>
          <br />

          <p>
            <strong>Limitation of Liability</strong>
          </p>
          <br />

          <p>
            YOU AGREE TO ABSOLVE THE COMPANY OF ANY AND ALL LIABILITY OR LOSS
            THAT YOU OR ANY PERSON OR ENTITY ASSOCIATED WITH YOU MAY SUFFER OR
            INCUR AS A RESULT OF USE OF THE INFORMATION CONTAINED ON THIS
            WEBSITE AND/OR THE RESOURCES YOU MAY DOWNLOAD FROM THIS WEBSITE. YOU
            AGREE THAT THE COMPANY SHALL NOT BE LIABLE TO YOU FOR ANY TYPE OF
            DAMAGES, INCLUDING DIRECT, INDIRECT, SPECIAL, INCIDENTAL, EQUITABLE,
            OR CONSEQUENTIAL LOSS OR DAMAGES FOR USE OF THIS WEBSITE.
          </p>
          <br />

          <p>
            THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
            AVAILABLE THROUGH THE WEBSITE MAY INCLUDE INACCURACIES OR
            TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE
            INFORMATION HEREIN. THE COMPANY AND/OR ITS SUPPLIERS MAY MAKE
            IMPROVEMENTS AND/OR CHANGES IN THE WEBSITE AT ANY TIME.
          </p>
          <br />

          <p>
            THE COMPANY AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE
            SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF
            THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS
            CONTAINED ON THE WEBSITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT
            PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE,
            PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED &ldquo;AS
            IS&rdquo; WITHOUT WARRANTY OR CONDITION OF ANY KIND. THE COMPANY
            AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS
            WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND
            RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
            NON-INFRINGEMENT.
          </p>
          <br />

          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
            THE COMPANY AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT,
            PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES
            WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE,
            DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE
            OR PERFORMANCE OF THE WEBSITE, WITH THE DELAY OR INABILITY TO USE
            THE WEBSITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO
            PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS,
            SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE WEBSITE, OR
            OTHERWISE ARISING OUT OF THE USE OF THE WEBSITE, WHETHER BASED ON
            CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF
            THE COMPANY OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE
            POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT
            ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR
            INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF
            YOU ARE DISSATISFIED WITH ANY PORTION OF THE WEBSITE, OR WITH ANY OF
            THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE
            USING THE WEBSITE.
          </p>
          <br />

          <p>
            <strong>Arbitration</strong>
          </p>
          <br />

          <p>
            You hereby expressly waive any and all claims you may have, now or
            in the future, arising out of or relating to this Website, the
            Company, any and all contracts you enter into with the Company, and
            any and all of the Company&rsquo;s products and services.
          </p>
          <br />

          <p>
            To the extent that you attempt to assert any such claim, you hereby
            expressly agree to present such claim only through binding
            arbitration to occur in Bend, OR. You further agree to and do hereby
            waive any right to class arbitration and agree, instead, to conduct
            an arbitration related solely to any individual claims you and/or
            any entity related to you asserts against the Company. To the
            fullest extent permissible by law, you further agree that you shall
            be responsible for all costs associated with initiating the
            arbitration and for the administration of the arbitration.
          </p>
          <br />

          <p>
            <strong>International Users</strong>
          </p>
          <br />

          <p>
            The Service is controlled, operated and administered by the Company
            from our offices within the USA. If you access the Service from a
            location outside the USA, you are responsible for compliance with
            all local laws. You agree that you will not use the Company Content
            accessed through the Website in any country or in any manner
            prohibited by any applicable laws, restrictions or regulations.
          </p>
          <br />

          <p>
            <strong>Indemnification</strong>
          </p>
          <br />

          <p>
            You agree to indemnify, defend, and hold harmless the Company, its
            officers, directors, employees, agents and third parties, for any
            losses, costs, liabilities and expenses (including reasonable
            attorneys&rsquo; fees) relating to or arising out of your use of or
            inability to use the Website or services, any user postings made by
            you, your violation of any terms of this Agreement or your violation
            of any rights of a third party, or your violation of any applicable
            laws, rules or regulations. The Company reserves the right, at its
            own cost, to assume the exclusive defense and control of any matter
            otherwise subject to indemnification by you, in which event you will
            fully cooperate with the Company in asserting any available
            defenses.
          </p>
          <br />

          <p>
            <strong>Termination And Access Restriction</strong>
          </p>
          <br />

          <p>
            The Company reserves the right, in its sole discretion, to terminate
            your access to the Website and the related services or any portion
            thereof at any time, without notice. To the maximum extent permitted
            by law, and you hereby consent to resolve any and all disputes
            arising under or related to this Website or the Terms of Use
            pursuant to the Arbitration Clause above. Use of the Website is
            unauthorized in any jurisdiction that does not give effect to all
            provisions of these Terms, including, without limitation, this
            section.
          </p>
          <br />

          <p>
            <strong>No Joint Venture Or Other Relationship</strong>
          </p>
          <br />

          <p>
            You agree that no joint venture, partnership, employment, or agency
            relationship exists between you and the Company as a result of this
            agreement or use of the Website. The Company&rsquo;s performance of
            this agreement is subject to existing laws and legal process, and
            nothing contained in this agreement is in derogation of the
            Company&rsquo;s right to comply with governmental, court, and law
            enforcement requests or requirements relating to your use of the
            Website or information provided to or gathered by the Company with
            respect to such use. If any part of this agreement is determined to
            be invalid or unenforceable pursuant to applicable law including,
            but not limited to, the warranty disclaimers and liability
            limitations set forth above, then the invalid or unenforceable
            provision will be deemed superseded by a valid, enforceable
            provision that most closely matches the intent of the original
            provision and the remainder of the agreement shall continue in
            effect.
          </p>
          <br />

          <p>
            <strong>Entire Agreement</strong>
          </p>
          <br />

          <p>
            Unless otherwise specified herein, this agreement, along with the
            Privacy Policy and Disclaimer, constitutes the entire agreement
            between the user and the Company with respect to the Website and it
            supersedes all prior or contemporaneous communications and
            proposals, whether electronic, oral or written, between the user and
            the Company with respect to the Website. A printed version of this
            agreement and of any notice given in electronic form shall be
            admissible in judicial or administrative proceedings based upon or
            relating to this agreement to the same extent and subject to the
            same conditions as other business documents and records originally
            generated and maintained in printed form. It is the express wish to
            the parties that this agreement and all related documents be written
            in English.
          </p>
          <br />

          <p>
            <strong>Changes to Terms</strong>
          </p>
          <br />

          <p>
            The Company reserves the right, in its sole discretion, to change
            the Terms under which the Website is offered. The most current
            version of the Terms will supersede all previous versions. The
            Company encourages you to periodically review the Terms to stay
            informed of our updates.
          </p>
          <br />

          <p>
            <strong>Contact Us</strong>
          </p>
          <br />

          <p>
            The Company welcomes your questions or comments regarding the Terms:
          </p>
          <br />

          <p>Guardian Group</p>
          <br />
          <p>Email Address: pga@guardiangroup.org</p>
          <br />

          <p>Effective as of January 1, 2021</p>
          <br />
        </p>
        <br />
        <br />
        <center>
          <Button
            solidBlue
            className="btton-signup mb-2"
            onClick={() => {
              pageChange("page-two");
              props.onStateChange("signUp", {});
            }}
          >
            Go Back
          </Button>
        </center>
      </Container>
    </Page>
  );
};

export default TermsModal;
