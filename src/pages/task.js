const Task = () => {
    return<>
      <div className="Task-page-wrap task-page">
          <h3>Task</h3>
          <div class="container">
  <div class="row">
    <div class="col-12">
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Delecuts aut autem</td>
            <td>False</td>
            <td>
            <button type="button" class="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>quis ut nam facilis et o...</td>
            <td>False</td>
            <td>
            <button type="button" class="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>fegiat veniam minus</td>
            <td>False</td>
            <td>
            <button type="button" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
        <button type="button" class="btn btn-primary">Add Task</button>
      </table>
    </div>
  </div>
</div>
      </div>
    </>
}

export default Task;