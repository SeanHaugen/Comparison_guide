

function RetractorRouts() {

    return (
        <div>
            <Route path='/RetractorCompare/good' element={
                <div>
                <RetractorTypeList setSelectedRoute={setSelectedRoute} />
            </div>
            }
            />
            <Route path='/RetractorCompare/better' element={
                <div>
                <RetractorTypeList setSelectedRoute={setSelectedRoute} />
            </div>
            }
            />
            <Route path='/RetractorCompare/best' element={
                <div>
                <RetractorTypeList setSelectedRoute={setSelectedRoute} />
            </div>
            }
            />
        </div>
    )
}