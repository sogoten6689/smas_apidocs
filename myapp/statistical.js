/**
 * @api {get} statistical/ademic-date/user/1/teacher/1/school/12313/academic_year/1 Ngày học kì
 * @apiName AcademicDate
 * @apiDescription Lấy ngày bắt đầu và ngày kết thúc của học kì.
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Token Token.
 * 
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/ademic-date/user/1/teacher/1/school/12313/academic_year/1
 * }
 *
 * @apiParam (Parameter) {Int} user_id ID user.
 * @apiParam (Parameter) {Int} teacher_id ID teacher.
 * @apiParam (Parameter) {Int} academic_year_id ID academic year.
 * @apiParam (Parameter) {Int} school_id ID school.
 *  
 * @apiSuccess {String} start_date StartDate of the academy.
 * @apiSuccess {String} end_date EndDate of academy.
 * @apiSuccess {String} disable_date DisableDate of the academy.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "start_date": "1/4/2020",
 *       "end_date": "20/7/2020",
 *     }
 *
 *  
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 * 
 * @apiErrorExample Error Response TEACHER_NOT_FOUND
 * HTTP/1.1 Error
 * {
 *      "success": false,
 *      "error_code": "TEACHER_NOT_FOUND",
 *      "message": "Mã giáo viên không tồn tại. Vui lòng kiểm tra lại"
 * } 
 *  
 * @apiErrorExample Error Response SCHOOL_NOT_FOUND
 * HTTP/1.1 Error
 * {
 *      "success": false,
 *      "error_code": "SCHOOL_NOT_FOUND",
 *      "message": "Mã trường không tồn tại. Vui lòng kiểm tra lại"
 * }
 * 
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 *  
 * @apiErrorExample Error-Response:
 * {
 *      "error_code": "ERROR_CODE_VALIDATE_TOKEN_FAIL",
 *      "error_message": "Phiên làm việc đã kết thúc, vui lòng đăng nhập lại",
 *      "success": false
 * }
 */