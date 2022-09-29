import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_live_51J6yJkJjdVstAFqKdoj4GGC4nkT2yD2HXnTWe1cnikHMRTdNoKwa8yySd3LQsWYyQm0x28641asvorhiF1uYTqMN00RHzajZTl"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
