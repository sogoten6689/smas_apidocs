/**
 * @api {get} /teacher/1/school/12313/academic_year_id/1  Classes Search Information
 * @apiName GetInfoSearchForClass
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Authorization Token.
 * @apiParam {Number} id Users unique ID.
 *
 * @apiParam (Parameter) {Int} teacher_id ID teacher.
 * @apiParam (Parameter) {Int} academic_year_id ID Academic Year.
 * @apiParam (Parameter) {Int} school_id ID school.
 *  
 * @apiSuccess {Array} class_name ClassName of the School By User.
 * @apiSuccess {String} start_date StartDate of the Academy.
 * @apiSuccess {String} end_date EndDate of the Academy.
 * @apiSuccess {String} disable_date DisableDate of the Academy.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "class_name": ["7A1", "7A2", "7A3"],
 *       "start_date": "1/4/2020",
 *       "end_date": "20/7/2020",
 *       "disable_date": "20/6/2020",
 *     }
 *
 */