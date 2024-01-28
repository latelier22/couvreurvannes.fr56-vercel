import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail";

export async function GET()  {
// Donner la clÃ© API
	// sgMail.setApiKey(process.env.KEY_SENDGRID);
	sgMail.setApiKey("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");

const body = {prenom: "Cyrille",
    nom: "DE L'Atelier",
    email: "latelier.cyrille@gmail.com",
    message: "Mon message",

}

	// CrÃ©ation du message
	const sendGridMail = {
		to: "contact@couvreurvannes.fr",
		from: "contact@couvreurvannes.fr",
		templateId: "d-4660587aed21443ea9cfa422302dd368",
		dynamic_template_data: {
			prenom: body.prenom,
			nom: body.nom,
			email: body.email,
			contenu: body.message,
		}
	};
    // Donner la clÃ© API
	// sgMail.setApiKey(process.env.KEY_SENDGRID);
	sgMail.setApiKey("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");

    try {
        const {data} = await sgMail.send(sendGridMail);
        return NextResponse.json({
            data
        });

    }
    catch (error) {
        return NextResponse.json({error});
    }
}
