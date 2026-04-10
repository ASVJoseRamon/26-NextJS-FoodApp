export default async function MealSlug({ params }) {
    const {slug} = await params;
    return (
        <>
            <h1>Página slug</h1>
            <p>/meals/{slug}</p>
        </>
    );
}