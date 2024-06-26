const nodemailer = require('nodemailer');

let mailTransporter =
	nodemailer.createTransport(
		{
			service: 'gmail',
			auth: {
				user: 'eduventure.team1@gmail.com',
				pass: 'Pass123@4'
			}
		}
	);

let mailDetails = {
	from: 'eduventure.team1@gmail.com',
	to: 'jett1413@gmail.com.',
	subject: 'Password Reset',
	text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter
	.sendMail(mailDetails,
		function (err, data) {
			if (err) {
				console.log('Error Occurs');
			} else {
				console.log('Email sent successfully');
			}
		});
