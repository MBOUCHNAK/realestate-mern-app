const CreateListing = () => {
    return (
      <main className="p-3 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">
          Create a listing
        </h1>
        <Form className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              placeholder="Name"
              className="border p-3 rounded-lg"
              id="name"
              maxLength="62"
              minLength="10"
              required
            />
            <input
              type="text"
              placeholder="Description"
              className="border p-3 rounded-lg"
              id="description"
              required
            />
            <input
              type="text"
              placeholder="Adress"
              className="border p-3 rounded-lg"
              id="adress"
              required
            />
            <div className="flex gap-6 flex-wrap">
              <div className="flex gap-2">
                <input type="checkbox" id="sale" className="w-5" />
                <span>Sell</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="rent" className="w-5" />
                <span>Rent</span>
              </div>
            </div>
          </div>
        </Form>
      </main>
    );
}
export default CreateListing;