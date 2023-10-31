<!-- Import -->
<div id="import-content">
    <div class="head-title">
        <div class="left">
            <h1>Master List Import</h1>
            <ul class="breadcrumb">
                <li><a href="#">Master List Import</a></li>
                <li><i class='bx bx-chevron-right'></i></li>
                <li><a class="active" href="#">Home</a></li>
            </ul>
        </div>
    </div>

    <form class="importform" action="/upload" method="post" enctype="multipart/form-data">
        <label for="file">Select file to import:</label>
        <input type="file" id="file" name="file" multiple>
        <button type="submit">Import</button>
      </form>
      <link rel="import" href="staff.html">
 <!--import-->
</div>
