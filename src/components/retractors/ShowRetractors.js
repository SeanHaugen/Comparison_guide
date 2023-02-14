import Retractors from '../../Data/Retractors'

function ShowRetractors({retractor, retractor2, retractor3}) {


    return (
        <>
        {Object.keys(Retractors).length > 0 && (
            <table className="product-section table is-striped ">
                <thead>
                    <tr>{retractor.name}</tr>
                    <tr>{retractor.id}</tr>
                </thead>
                <tbody>
                    <tr>{retractor.size}</tr>
                    <tr>{retractor.media}</tr>
                    <tr>{retractor.RCAT}</tr>
                    <tr>{retractor.base}</tr>
                    <tr>{retractor.pole}</tr>
                    <tr>{retractor.banner}</tr>
                    <tr>{retractor.production}</tr>
                </tbody>
            </table >
        )}
       <hr />
            <div className="bottom-container table-container">
            {Object.keys(Retractors).length > 0 && (
                <table className="product-section table is-bordered is-narrow is-hoverable ">
                    <thead>
                        <tr>{retractor2.name}</tr>
                        <tr>{retractor2.id}</tr>
                    </thead>
                    <tbody>
                        <tr className={retractor2.size === retractor.size ? '' : 'highlight'}  >{retractor2.size}</tr>
                        <tr className={retractor2.media === retractor.media ? '' : 'highlight'}>{retractor2.media}</tr>
                        <tr className={retractor2.RCAT === retractor.RCAT ? '' : 'highlight'}>{retractor2.RCAT}</tr>
                        <tr className={retractor2.base === retractor.base ? '' : 'highlight'}>{retractor2.base}</tr>
                        <tr className={retractor2.pole === retractor.pole ? '' : 'highlight'}>{retractor2.pole}</tr>
                        <tr className={retractor2.banner === retractor.banner ? '' : 'highlight'}>{retractor2.banner}</tr>
                        <tr className={retractor2.production === retractor.production ? '' : 'highlight'}>{retractor2.production}</tr>
                    </tbody>
                </table>
        )}
            {Object.keys(Retractors).length > 0 && (
                <table className="product-section table is-bordered is-narrow is-hoverable">
                    <thead>
                        <tr>{retractor3.name}</tr>
                        <tr>{retractor3.id}</tr>
                    </thead>
                    <tbody>
                        <tr className={retractor3.size === retractor.size ? '' : 'highlight'}  >{retractor3.size}</tr>
                        <tr className={retractor3.media === retractor.media ? '' : 'highlight'}>{retractor3.media}</tr>
                        <tr className={retractor3.RCAT === retractor.RCAT ? '' : 'highlight'}>{retractor3.RCAT}</tr>
                        <tr className={retractor3.base === retractor.base ? '' : 'highlight'}>{retractor3.base}</tr>
                        <tr className={retractor3.pole === retractor.pole ? '' : 'highlight'}>{retractor3.pole}</tr>
                        <tr className={retractor3.banner === retractor.banner ? '' : 'highlight'}>{retractor3.banner}</tr>
                        <tr className={retractor3.production === retractor.production ? '' : 'highlight'}>{retractor3.production}</tr>
                    </tbody>
                </table>
        )}
        </div>
        </>
)}

export default ShowRetractors